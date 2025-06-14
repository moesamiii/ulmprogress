import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const TestPackageCard = () => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTests = async () => {
      try {
        const response = await axios.get(
          "https://newulmmed.com/api/MedicalTest/GetAllMedicalTestPackages?PageNumber=1&PageSize=1"
        );
        setTests(response.data.data || []);
      } catch (err) {
        setError("Failed to fetch test packages.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTests();
  }, []);

  if (loading) return <p>{isArabic ? "جار التحميل..." : "Loading..."}</p>;
  if (error) return <p>{isArabic ? "فشل في تحميل البيانات" : error}</p>;

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {tests.map((test) => (
        <div
          key={test.id}
          className="bg-white rounded-xl p-4 shadow-md max-w-[280px] w-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-slate-50 flex flex-col items-center"
          dir="rtl"
        >
          {test.logo ? (
            <div className="flex justify-center mb-4 transition-all duration-300">
              <img
                src={test.logo}
                alt={
                  isArabic
                    ? test.arabicName || test.name
                    : test.name || test.arabicName
                }
                className="w-[140px] h-[140px] object-contain transition-all duration-300"
              />
            </div>
          ) : (
            <div className="text-4xl text-blue-600 mb-4 transition-all duration-300">
              🔬
            </div>
          )}

          <div className="text-right w-full">
            <h3 className="text-lg text-gray-800 mb-3 leading-tight transition-all duration-300">
              {isArabic
                ? test.arabicName || test.name
                : test.name || test.arabicName}
            </h3>
            <p className="text-sm text-gray-500 mb-4 overflow-hidden overflow-ellipsis line-clamp-3">
              {isArabic
                ? test.arabicDescription ||
                  test.description ||
                  "لا يوجد وصف متوفر"
                : test.description ||
                  test.arabicDescription ||
                  "No description available"}
            </p>
          </div>

          <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md transition-all duration-300 hover:bg-blue-700 hover:-translate-y-[1px] hover:shadow-md self-start">
            {isArabic ? "تفاصيل" : "Details"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default TestPackageCard;
