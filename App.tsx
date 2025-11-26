import React, { useState } from 'react';
import { ContentProvider } from './contexts/ContentContext';
import { ViewState, Service } from './types';
import Navbar from './components/Navbar';
import { HomeView, AboutView, ServicesView, ProjectsView, ContactView, ServiceDetailView, NewsView } from './pages/PublicViews';
import { AdminDashboard } from './pages/Admin';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-dark text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">شركة الغيث</h3>
            <p className="text-gray-300 text-sm leading-6">
              نلتزم بتقديم أرقى خدمات المقاولات والإنشاءات وفق أعلى معايير الجودة والسلامة.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary">روابط سريعة</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white transition">الرئيسية</a></li>
              <li><a href="#" className="hover:text-white transition">من نحن</a></li>
              <li><a href="#" className="hover:text-white transition">المشاريع</a></li>
              <li><a href="#" className="hover:text-white transition">اتصل بنا</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary">خدماتنا</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>مقاولات عامة</li>
              <li>تشطيبات وديكور</li>
              <li>بنية تحتية</li>
              <li>أعمال خرسانية</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary">تواصل معنا</h4>
            <p className="text-gray-300 text-sm mb-2">الرياض - العليا</p>
            <p className="text-gray-300 text-sm mb-2 font-sans dir-ltr text-right">+966 50 123 4567</p>
            <p className="text-gray-300 text-sm">info@alghaith.com</p>
          </div>
        </div>
        <div className="pt-6 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} شركة الغيث للمقاولات. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
};

const MainLayout = () => {
  const [currentView, setCurrentView] = useState<ViewState>('HOME');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Scroll to top when view changes
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  if (currentView === 'ADMIN') {
    return <AdminDashboard />;
  }

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar currentView={currentView} setView={setCurrentView} />
      
      <main className="flex-grow">
        {currentView === 'HOME' && <HomeView setView={setCurrentView} />}
        {currentView === 'ABOUT' && <AboutView />}
        {currentView === 'SERVICES' && <ServicesView setView={setCurrentView} setSelectedService={setSelectedService} />}
        {currentView === 'SERVICE_DETAIL' && <ServiceDetailView setView={setCurrentView} selectedService={selectedService} />}
        {currentView === 'PROJECTS' && <ProjectsView />}
        {currentView === 'NEWS' && <NewsView />}
        {currentView === 'CONTACT' && <ContactView />}
      </main>

      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ContentProvider>
      <MainLayout />
    </ContentProvider>
  );
};

export default App;