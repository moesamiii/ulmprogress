import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import navigate
import avatar from "../assets/avatar-man.png";
import logo from "../assets/ulm-care-logo.png";
import { FiChevronDown, FiShoppingCart, FiBell } from "react-icons/fi";

const Checkout = () => {
  const navigate = useNavigate(); // ✅ Use navigate

  return (
    <div className="bg-[#F9FAFB] min-h-screen" dir="rtl">
      {/* Navbar */}
      <div className="pt-[64px] bg-[#F9FAFB]">
        <nav className="w-[1440px] bg-white mx-auto border-b border-[#FFFFFF]">
          <div className="h-[42px] px-[80px] flex items-center justify-between">
            {/* Right section */}
            <div className="flex items-center h-[36px] gap-[42px]">
              {/* Logo */}
              <div className="w-[131.54px] h-[36px] flex items-center justify-end">
                <img
                  src={logo}
                  alt="Ulm Care Logo"
                  className="h-full w-auto object-contain"
                  style={{ maxWidth: "131.54px", maxHeight: "36px" }}
                />
              </div>

              {/* Menu Items */}
              <div
                className="flex items-center h-[24px] gap-[16px]"
                style={{ width: "298px" }}
              >
                {/* الرئيسية - Go Back */}
                <span
                  onClick={() => navigate(-1)}
                  className="text-[#0798F1] font-semibold text-base leading-[24px] flex items-center cursor-pointer hover:underline"
                  style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }}
                >
                  الرئيسية
                </span>

                {/* خدماتنا */}
                <div
                  className="flex items-center gap-[5px]"
                  style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }}
                >
                  <span className="text-base font-normal text-[#6F6F6F] leading-[24px]">
                    خدماتنا
                  </span>
                  <FiChevronDown className="w-[8px] h-[16px] text-[#6F6F6F] mt-[4px]" />
                </div>

                {/* كونكت للأطباء */}
                <span
                  className="text-base font-normal text-[#6F6F6F] leading-[24px]"
                  style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }}
                >
                  كونكت للأطباء
                </span>

                {/* الدعم */}
                <span
                  className="text-base font-normal text-[#6F6F6F] leading-[24px]"
                  style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }}
                >
                  الدعم
                </span>
              </div>
            </div>

            {/* Left section */}
            <div className="w-[590px] h-[42px] flex items-center justify-end gap-[16px]">
              {/* Icons */}
              <div className="flex items-center gap-[16px]">
                <FiBell className="w-[24px] h-[24px] text-[#6F6F6F]" />
                <FiShoppingCart className="w-[24px] h-[24px] text-[#6F6F6F]" />
              </div>

              {/* Language */}
              <div className="flex items-center gap-1 h-[24px] text-[#6F6F6F]">
                <span
                  className="text-[16px] font-normal"
                  style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }}
                >
                  ENG
                </span>
                <FiChevronDown className="w-[24px] h-[24px]" />
              </div>

              {/* Avatar */}
              <div className="w-[42px] h-[42px]">
                <img
                  src={avatar}
                  alt="User Avatar"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Checkout;
