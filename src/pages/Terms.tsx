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
          <h3 className="text-lg font-bold text-slate-900 mb-2">1. Acceptance of Terms</h3>
          <p className="mb-6">By accessing SocialSync Pro, you agree to be bound by these Terms of Service, as well as the official <strong>TikTok Developer Terms of Service</strong>. If you do not agree, you may not use our API integration.</p>
          
          <h3 className="text-lg font-bold text-slate-900 mb-2">2. API Usage & Sandbox Environment</h3>
          <p className="mb-6">This application currently operates in a <strong>Developer Sandbox</strong>. It utilizes the <strong>TikTok Login Kit</strong> for authentication, the <strong>Display API</strong> to fetch public video metadata, and the <strong>Content Posting API</strong> (Direct Post) for video uploads. Access is restricted to authorized test accounts (@warda_53).</p>
          
          <h3 className="text-lg font-bold text-slate-900 mb-2">3. Content Restrictions</h3>
          <p className="mb-6">When using the Content Posting API, you agree that all uploaded media complies with TikTok's Community Guidelines. You must not upload content that infringes on intellectual property rights or violates the TikTok API Developer Agreement.</p>
          
          <h3 className="text-lg font-bold text-slate-900 mb-2">4. Rate Limiting & Quotas</h3>
          <p className="mb-6">As a Sandbox application, API requests are subject to strict rate limits (e.g., requests per second/minute) enforced by the TikTok Open API platform. Excessive requests may result in temporary suspension of your Sandbox access token.</p>
        </div>
      </div>
    </div>
  );
}
