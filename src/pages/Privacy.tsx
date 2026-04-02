import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center bg-slate-50">
          <Link to="/" className="mr-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-200 rounded-full transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Privacy Policy</h1>
        </div>
        <div className="p-6 sm:p-8 text-slate-600 leading-relaxed">
          <p className="mb-6 text-sm text-slate-500">Last Updated: February 2026</p>

          <h3 className="text-lg font-bold text-slate-900 mb-2">1. Information We Collect</h3>
          <p className="mb-6">We collect information you provide directly to us when you create an account, update your profile, or use our services. This may include your name, email address, profile information, and any content you upload or share through the platform.</p>
          
          <h3 className="text-lg font-bold text-slate-900 mb-2">2. How We Use Your Information</h3>
          <p className="mb-6">We use the information we collect to provide, maintain, and improve our services. This includes personalizing your experience, processing transactions, sending you technical notices and support messages, and analyzing usage trends.</p>
          
          <h3 className="text-lg font-bold text-slate-900 mb-2">3. Information Sharing</h3>
          <p className="mb-6">We do not sell your personal information. We may share your information with third-party vendors, consultants, and other service providers who need access to such information to carry out work on our behalf, subject to strict confidentiality agreements.</p>
          
          <h3 className="text-lg font-bold text-slate-900 mb-2">4. Data Security</h3>
          <p className="mb-6">We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.</p>

          <h3 className="text-lg font-bold text-slate-900 mb-2">5. Your Rights</h3>
          <p className="mb-6">Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your data. You can manage most of your information directly through your account settings.</p>
        </div>
      </div>
    </div>
  );
}
