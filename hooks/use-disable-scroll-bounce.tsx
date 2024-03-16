import React, { useEffect } from "react";

const useDisableScrollBounce = () => {
  useEffect(() => {
    document.body.classList.add("owerflow-hidden", "overscroll-none");
    return () => {
      document.body.classList.remove("owerflow-hidden", "overscroll-none");
    };
  }, []);
};

export default useDisableScrollBounce;
