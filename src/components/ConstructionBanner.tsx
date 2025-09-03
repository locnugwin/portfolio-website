import React from "react";

const ConstructionBanner: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-yellow-500 text-center py-2 z-50">
      <p className="text-black font-medium">
        🚧 This site is currently under construction. Some features may not be working or working as intended. 🚧
      </p>
    </div>
  );
};

export default ConstructionBanner;
