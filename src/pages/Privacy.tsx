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
          <h3 className="text-lg font-bold text-slate-900 mb-2">1. Data Collection via Login Kit</h3>
          <p className="mb-6">Upon authorization through the <strong>TikTok Login Kit</strong>, we request the <code>user.info.basic</code> scope. This grants us temporary access to your public profile data, including your Display Name, Avatar URL, and Profile Link.</p>
          
          <h3 className="text-lg font-bold text-slate-900 mb-2">2. Video Data & Display API</h3>
          <p className="mb-6">We utilize the <strong>TikTok Display API</strong> (<code>video.list</code> scope) to retrieve metadata for your public videos (views, likes, comments). This data is used solely to populate your SocialSync Pro dashboard.</p>
          
          <h3 className="text-lg font-bold text-slate-900 mb-2">3. Data Storage & Security</h3>
          <p className="mb-6">Because this is a client-side Sandbox demonstration, <strong>we do not store your TikTok Access Tokens, Refresh Tokens, or video data on external servers</strong>. All data fetched from <code>open.tiktokapis.com</code> is processed locally in your browser session and is cleared upon logout.</p>
          
          <h3 className="text-lg font-bold text-slate-900 mb-2">4. Third-Party Sharing</h3>
          <p className="mb-6">We do not share your data with any third parties. Data is exchanged directly and securely between your browser and TikTok's official API endpoints.</p>
        </div>
      </div>
    </div>
  );
}
