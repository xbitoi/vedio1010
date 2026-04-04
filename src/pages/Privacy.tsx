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
            <p className="mb-6 text-sm text-slate-500">Last Updated: April 2026</p>

            <p className="mb-6">SocialSync Pro ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Service at <strong>vedio1010.vercel.app</strong>. Please read this policy carefully.</p>

            <h3 className="text-lg font-bold text-slate-900 mb-2">1. Information We Collect</h3>
            <p className="mb-3">We collect the following types of information:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>TikTok Account Data:</strong> When you connect your TikTok account, we receive your TikTok user ID, display name, profile picture, and follower count through the TikTok API with your explicit authorization.</li>
              <li><strong>TikTok Content Data:</strong> We access your TikTok video list, video statistics (views, likes, comments, shares), and video metadata to display your analytics dashboard.</li>
              <li><strong>Usage Data:</strong> We may collect information on how the Service is accessed and used, including pages visited and features used.</li>
            </ul>

            <h3 className="text-lg font-bold text-slate-900 mb-2">2. How We Use Your Information</h3>
            <p className="mb-3">We use the collected information to:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Provide and maintain the Service, including displaying your TikTok analytics and profile information.</li>
              <li>Authenticate your identity and manage your session securely.</li>
              <li>Improve and personalize your experience with the Service.</li>
              <li>Detect, prevent, and address technical issues or security vulnerabilities.</li>
              <li>Comply with legal obligations.</li>
            </ul>

            <h3 className="text-lg font-bold text-slate-900 mb-2">3. TikTok API Data</h3>
            <p className="mb-6">Our Service uses the TikTok API to access your account data. We only request and store TikTok data that is necessary to deliver the Service features you use. We do not sell, rent, or share your TikTok data with third parties for their own marketing purposes. We comply with TikTok's API Terms of Service and Data Policies. You can revoke our access to your TikTok data at any time through your TikTok account settings under "Manage app permissions".</p>

            <h3 className="text-lg font-bold text-slate-900 mb-2">4. Data Retention</h3>
            <p className="mb-6">We retain your TikTok data only for as long as necessary to provide the Service or as required by law. When you disconnect your TikTok account or request deletion, we will delete or anonymize your data within 30 days.</p>

            <h3 className="text-lg font-bold text-slate-900 mb-2">5. Information Sharing and Disclosure</h3>
            <p className="mb-6">We do not sell your personal information. We may share your information only in the following circumstances: (a) with service providers who assist us in operating the Service, under strict confidentiality agreements; (b) if required by law or to protect the rights and safety of our users; (c) in connection with a business transfer or merger, with appropriate privacy protections.</p>

            <h3 className="text-lg font-bold text-slate-900 mb-2">6. Data Security</h3>
            <p className="mb-6">We implement industry-standard security measures to protect your personal information, including HTTPS encryption for all data transmission, secure storage practices, and access controls. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>

            <h3 className="text-lg font-bold text-slate-900 mb-2">7. Your Rights</h3>
            <p className="mb-3">Depending on your location, you may have the following rights regarding your personal data:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong>Correction:</strong> Request correction of inaccurate personal data.</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data.</li>
              <li><strong>Revocation:</strong> Revoke your TikTok API authorization at any time through TikTok settings.</li>
            </ul>
            <p className="mb-6">To exercise these rights, please contact us using the information below.</p>

            <h3 className="text-lg font-bold text-slate-900 mb-2">8. Third-Party Services</h3>
            <p className="mb-6">Our Service integrates with TikTok. Your use of TikTok's platform is governed by TikTok's Privacy Policy, available at <a href="https://www.tiktok.com/legal/privacy-policy" className="text-indigo-600 underline" target="_blank" rel="noopener noreferrer">https://www.tiktok.com/legal/privacy-policy</a>. We are not responsible for TikTok's privacy practices.</p>

            <h3 className="text-lg font-bold text-slate-900 mb-2">9. Children's Privacy</h3>
            <p className="mb-6">Our Service is not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete that information.</p>

            <h3 className="text-lg font-bold text-slate-900 mb-2">10. Changes to This Privacy Policy</h3>
            <p className="mb-6">We may update this Privacy Policy from time to time. We will notify you of any changes by updating the "Last Updated" date at the top of this page. We encourage you to review this Privacy Policy periodically for any changes.</p>

            <h3 className="text-lg font-bold text-slate-900 mb-2">11. Contact Us</h3>
            <p className="mb-6">If you have any questions about this Privacy Policy or our data practices, please contact us at: <strong>support@socialsyncpro.com</strong></p>
          </div>
        </div>
      </div>
    );
  }
  