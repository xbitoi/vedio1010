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

            <h3 className="text-lg font-bold text-slate-900 mb-2">1. Acceptance of Terms</h3>
            <p className="mb-6">Welcome to SocialSync Pro ("Service"), operated by SocialSync Pro ("we", "us", or "our"). By accessing or using our platform at <strong>vedio1010.vercel.app</strong>, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions, you may not access the website or use any services.</p>

            <h3 className="text-lg font-bold text-slate-900 mb-2">2. Description of Service</h3>
            <p className="mb-6">SocialSync Pro is a social media management tool that connects with TikTok through the official TikTok API. The Service allows users to authenticate with their TikTok account, view their video analytics, manage their content, and access profile information through a secure and authorized connection.</p>

            <h3 className="text-lg font-bold text-slate-900 mb-2">3. TikTok API Usage</h3>
            <p className="mb-6">Our Service integrates with the TikTok API to provide functionality. By using our Service, you authorize us to access your TikTok account data as permitted by the scopes you approve during the TikTok OAuth authorization flow. We only request data that is strictly necessary to provide the Service. Your use of the TikTok API through our platform is also subject to TikTok's own Terms of Service available at <a href="https://www.tiktok.com/legal/terms-of-service" className="text-indigo-600 underline" target="_blank" rel="noopener noreferrer">https://www.tiktok.com/legal/terms-of-service</a>.</p>

            <h3 className="text-lg font-bold text-slate-900 mb-2">4. User Accounts</h3>
            <p className="mb-6">To use certain features of the Service, you must authenticate using your TikTok account. You are responsible for maintaining the confidentiality of your access credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.</p>

            <h3 className="text-lg font-bold text-slate-900 mb-2">5. User Data and Content</h3>
            <p className="mb-6">You retain full ownership of your TikTok content and data. By connecting your TikTok account, you grant us a limited, non-exclusive license to access and display your TikTok data solely for the purpose of providing the Service. We do not modify, redistribute, or sell your TikTok content.</p>

            <h3 className="text-lg font-bold text-slate-900 mb-2">6. Prohibited Uses</h3>
            <p className="mb-6">You agree to use the Service only for lawful purposes. You must not: (a) use the Service to violate TikTok's Terms of Service or Community Guidelines; (b) attempt to gain unauthorized access to other users' accounts; (c) use the Service to collect or harvest data about other TikTok users without their consent; (d) reverse-engineer or misuse the Service.</p>

            <h3 className="text-lg font-bold text-slate-900 mb-2">7. Disclaimer of Warranties</h3>
            <p className="mb-6">The Service is provided on an "as is" and "as available" basis without warranties of any kind, either express or implied. We do not warrant that the Service will be uninterrupted, error-free, or that defects will be corrected. We are not affiliated with, endorsed by, or officially connected to TikTok or ByteDance Ltd.</p>

            <h3 className="text-lg font-bold text-slate-900 mb-2">8. Limitation of Liability</h3>
            <p className="mb-6">To the fullest extent permitted by applicable law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, arising out of or relating to your use or inability to use the Service.</p>

            <h3 className="text-lg font-bold text-slate-900 mb-2">9. Termination</h3>
            <p className="mb-6">We may terminate or suspend your access immediately, without prior notice or liability, for any reason, including if you breach these Terms. You may disconnect your TikTok account at any time through your TikTok account settings. Upon termination, your right to use the Service will immediately cease.</p>

            <h3 className="text-lg font-bold text-slate-900 mb-2">10. Changes to Terms</h3>
            <p className="mb-6">We reserve the right to modify these Terms at any time. We will notify you of significant changes by updating the "Last Updated" date at the top of this page. Your continued use of the Service after changes become effective constitutes your acceptance of the new Terms.</p>

            <h3 className="text-lg font-bold text-slate-900 mb-2">11. Contact Us</h3>
            <p className="mb-6">If you have any questions about these Terms of Service, please contact us at: <strong>support@socialsyncpro.com</strong></p>
          </div>
        </div>
      </div>
    );
  }
  