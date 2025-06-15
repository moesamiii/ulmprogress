import React from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4 md:px-12 lg:px-24">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          صفحة الدفع
        </h1>
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
        >
          العودة
        </button>
      </div>

      {/* Page Content Placeholder */}
      <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm p-6">
        {/* Your future checkout form or components will go here */}
        <p className="text-gray-700 text-lg">
          هذه مساحة لمحتوى الدفع الخاص بك.
        </p>
      </div>
    </div>
  );
};

export default Checkout;
