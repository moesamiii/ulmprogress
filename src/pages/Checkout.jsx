import React from "react";
import { useNavigate } from "react-router-dom";
import { FiChevronDown, FiShoppingCart, FiBell } from "react-icons/fi";
import avatar from "../assets/avatar-man.png";
import logo from "../assets/ulm-care-logo.png";

const Checkout = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F9FAFB] min-h-screen text-right" dir="rtl">
      {/* Navbar */}
      <header className="pt-[64px] bg-[#F9FAFB]">
        <nav className="w-full max-w-[1440px] mx-auto bg-white border-b border-[#FFFFFF]">
          <div className="h-[42px] px-[80px] flex items-center justify-between">
            <div className="flex items-center gap-[42px]">
              <div className="w-[131.54px]">
                <img src={logo} alt="Ulm Care Logo" className="h-[36px]" />
              </div>
              <div className="flex gap-4 text-[#6F6F6F] text-base">
                <span
                  onClick={() => navigate(-1)}
                  className="text-[#0798F1] font-semibold cursor-pointer hover:underline"
                >
                  الرئيسية
                </span>
                <div className="flex items-center gap-1 cursor-pointer">
                  <span>خدماتنا</span>
                  <FiChevronDown className="w-4 h-4 mt-1" />
                </div>
                <span>كونكت للأطباء</span>
                <span>الدعم</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-4 text-[#6F6F6F]">
                <FiBell className="w-6 h-6" />
                <FiShoppingCart className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-1">
                <span>ENG</span>
                <FiChevronDown className="w-5 h-5" />
              </div>
              <img
                src={avatar}
                alt="Avatar"
                className="w-[42px] h-[42px] rounded-full object-cover"
              />
            </div>
          </div>
        </nav>
      </header>

      {/* Breadcrumb */}
      <div
        className="max-w-[1440px] mx-auto px-4 md:px-[80px] pt-6 text-right"
        dir="rtl"
      >
        <div className="text-sm text-[#4B4B4B] font-normal mb-[-4px]">
          &lt; الرجوع
        </div>
        <div className="text-[#222222] text-[24px] font-bold leading-[100%] text-right mt-[6px]">
          الدفع
        </div>
      </div>

      <br></br>

      {/* Checkout Body */}
      <main className="max-w-[1440px] mx-auto px-4 md:px-[80px] grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Billing Form & Payment */}
        <section>
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <h2 className="text-xl font-bold mb-4 text-[#1C1C1C]">
              عنوان الفواتير المحفوظة
            </h2>
            <div className="space-y-3 mb-6">
              {[1, 2].map((_, i) => (
                <div
                  key={i}
                  className={`border p-3 rounded-lg flex justify-between items-center ${
                    i === 0 ? "border-blue-500 bg-blue-50" : "border-gray-300"
                  }`}
                >
                  <div>
                    <p className="font-bold text-sm">محمود محمد</p>
                    <p className="text-sm text-gray-500">
                      شارع الملك في حي الورود - الرياض، المملكة العربية السعودية
                      11025
                    </p>
                  </div>
                  {i === 0 && (
                    <span className="text-blue-500 font-bold">✔</span>
                  )}
                </div>
              ))}
            </div>
            <h3 className="text-base font-semibold mb-2">إضافة عنوان جديد</h3>
            <form className="grid grid-cols-2 gap-4 text-sm">
              <input
                type="text"
                placeholder="الاسم الأول"
                className="border rounded p-2"
              />
              <input
                type="text"
                placeholder="الاسم الأخير"
                className="border rounded p-2"
              />
              <input
                type="text"
                placeholder="الدولة"
                className="col-span-2 border rounded p-2"
              />
              <input
                type="text"
                placeholder="المدينة"
                className="col-span-2 border rounded p-2"
              />
              <input
                type="text"
                placeholder="اسم الشارع"
                className="col-span-2 border rounded p-2"
              />
              <input
                type="text"
                placeholder="تفاصيل العنوان"
                className="col-span-2 border rounded p-2"
              />
              <input
                type="text"
                placeholder="الرمز البريدي"
                className="col-span-2 border rounded p-2"
              />
            </form>
            <button className="text-blue-600 text-sm mt-4 hover:underline">
              حفظ
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4 text-[#1C1C1C]">
              أختر طريقة الدفع
            </h2>
            <div className="space-y-3 text-sm">
              <div className="border p-3 rounded cursor-pointer flex justify-between items-center">
                الدفع باستخدام البطاقة
                <div className="flex gap-2">
                  <img
                    src="https://img.icons8.com/color/24/visa.png"
                    alt="Visa"
                  />
                  <img
                    src="https://img.icons8.com/color/24/mastercard-logo.png"
                    alt="MasterCard"
                  />
                  <img
                    src="https://img.icons8.com/color/24/paypal.png"
                    alt="PayPal"
                  />
                </div>
              </div>
              <div className="border p-3 rounded cursor-pointer">
                الدفع كاش في عيادة أولم
              </div>
              <div className="border p-3 rounded cursor-pointer">
                دفع بالتقسيط عن طريق البنك — من 10 إلى 1,000 JOD
              </div>
              <div className="border p-3 rounded cursor-pointer">
                دفع بالتقسيط عن طريق الموقع — من 10 إلى 10,000 JOD
              </div>
            </div>
          </div>
        </section>

        {/* Order Summary */}
        <section className="bg-white rounded-xl shadow-sm p-6 h-fit">
          <h2 className="text-xl font-bold mb-4 text-[#1C1C1C]">
            تفاصيل الطلب
          </h2>
          <div className="flex justify-between mb-3">
            <div>
              <p className="font-medium">جراحة الفم والأسنان</p>
              <p className="text-sm text-gray-500">
                إزالة الصفائح والبراغي - يتطلب الصيام
              </p>
            </div>
            <div className="text-gray-600">250 JOD</div>
          </div>
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>الضريبة (%16)</span>
            <span>35 JOD</span>
          </div>
          <div className="flex justify-between font-bold text-blue-600 mt-2">
            <span>المبلغ المستحق (شامل الضريبة)</span>
            <span>285 JOD</span>
          </div>
        </section>
      </main>

      {/* Payment Button */}
      <div className="w-full flex justify-center px-4 md:px-[80px] mt-8">
        <button className="w-full max-w-[400px] bg-[#0798F1] hover:bg-[#007dd1] text-white py-3 rounded-lg font-semibold text-sm">
          إتمام الدفع
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-[#0C1E2C] text-white py-10 px-4 md:px-[80px] text-sm mt-16">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold mb-3">Ulm Care</h4>
            <p>
              تقديم خدمات طبية شاملة بأعلى معايير الجودة والاحترافية، لضمان
              الرعاية المتكاملة لك ولعائلتك.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-3">الشركة</h4>
            <ul className="space-y-1">
              <li>من نحن؟</li>
              <li>انضم لنا</li>
              <li>الدعم</li>
              <li>أسئلة شائعة</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">خدماتنا</h4>
            <ul className="space-y-1">
              <li>التحاليل الطبية</li>
              <li>العيادات</li>
              <li>الأشعة</li>
              <li>الأطباء</li>
              <li>الرعاية المنزلية</li>
              <li>المرافقة الصحية</li>
              <li>السياحة العلاجية</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">تواصل معنا</h4>
            <p>+962790098906</p>
            <p>info@ulmcare.jo</p>
            <p>Wasfi AlTal St. P.O. Box. 5873 Amman - 11953 Jordan</p>
          </div>
        </div>
        <div className="text-center mt-6 text-xs text-gray-300 border-t border-gray-700 pt-4">
          جميع الحقوق محفوظة © New ULM®
        </div>
      </footer>
    </div>
  );
};

export default Checkout;
