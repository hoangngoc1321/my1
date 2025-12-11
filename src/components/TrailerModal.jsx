import React from "react";

const TrailerModal = ({ videoKey, onClose }) => {
  if (!videoKey) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="w-[90%] max-w-3xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-white text-2xl z-50"
          onClick={onClose}
        >
          ✕
        </button>

        <iframe
          className="w-full h-[600px] rounded-lg"
          src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default TrailerModal;