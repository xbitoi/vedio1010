import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center bg-slate-50">
          <Link to="/" className="mr-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-200 rounded-full transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Terms of Service</h1>
        </div>
        <div className="p-6 sm:p-8 text-slate-600 leading-relaxed">
          <p className="mb-6 text-sm text-slate-500">Last Updated: April 2026</p>
          
          <h3 className="text-lg font-bold text-slate-900 mb-2">1. Introduction</h3>
          <p className="mb-6">Welcome to SocialSync. By accessing or using our platform, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions, then you may not access the website or use any services.</p>
          
          <h3 className="text-lg font-bold text-slate-900 mb-2">2. User Accounts</h3>
          <p className="mb-6">To use certain features of the service, you must create an account. You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.</p>
          
          <h3 className="text-lg font-bold text-slate-900 mb-2">3. User Content</h3>
          <p className="mb-6">Our service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material. You retain all of your ownership rights in your content, but you grant us a license to use, store, and display that content in connection with the service.</p>
          
          <h3 className="text-lg font-bold text-slate-900 mb-2">4. Prohibited Uses</h3>
          <p className="mb-6">You may use our service only for lawful purposes. You agree not to use the service in any way that violates any applicable national or international law or regulation, or to engage in any conduct that restricts or inhibits anyone's use or enjoyment of the service.</p>
          
          <h3 className="text-lg font-bold text-slate-900 mb-2">5. Termination</h3>
          <p className="mb-6">We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the service will immediately cease.</p>
        </div>
      </div>
    </div>
  );
}
