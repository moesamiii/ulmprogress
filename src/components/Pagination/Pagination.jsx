import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center gap-2 mt-6 flex-wrap w-full px-2">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`w-9 h-9 flex items-center justify-center rounded-full transition-all text-gray-800 ${
          currentPage === 1
            ? "opacity-50 cursor-not-allowed bg-gray-200"
            : "bg-gray-100 hover:bg-blue-600 hover:text-white"
        }`}
      >
        ‹
      </button>

      {/* Page Numbers */}
      {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
        let pageNum;
        if (totalPages <= 5) {
          pageNum = i + 1;
        } else if (currentPage <= 3) {
          pageNum = i + 1;
        } else if (currentPage >= totalPages - 2) {
          pageNum = totalPages - 4 + i;
        } else {
          pageNum = currentPage - 2 + i;
        }

        return (
          <button
            key={pageNum}
            onClick={() => onPageChange(pageNum)}
            className={`w-9 h-9 flex items-center justify-center rounded-full transition-all ${
              currentPage === pageNum
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-800 hover:bg-blue-600 hover:text-white"
            }`}
          >
            {pageNum}
          </button>
        );
      })}

      {/* Ellipsis + Last Page */}
      {totalPages > 5 && currentPage < totalPages - 2 && (
        <>
          <span className="px-2 text-gray-500 flex items-center justify-center">
            ...
          </span>
          <button
            onClick={() => onPageChange(totalPages)}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-800 hover:bg-blue-600 hover:text-white transition-all"
          >
            {totalPages}
          </button>
        </>
      )}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`w-9 h-9 flex items-center justify-center rounded-full transition-all text-gray-800 ${
          currentPage === totalPages
            ? "opacity-50 cursor-not-allowed bg-gray-200"
            : "bg-gray-100 hover:bg-blue-600 hover:text-white"
        }`}
      >
        ›
      </button>
    </div>
  );
};

export default Pagination;
