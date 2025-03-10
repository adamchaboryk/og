import * as React from "react";

function SvgFigma(props) {
  return (
    <svg
      width="1.4em"
      height="1.4em"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.32 0h15.36a8.642 8.642 0 013.96 16.32A8.642 8.642 0 0140.32 24c0 4.77-3.87 8.64-8.64 8.64a8.625 8.625 0 01-6.72-3.21v9.93c0 4.77-3.87 8.64-8.64 8.64a8.642 8.642 0 01-3.96-16.32 8.642 8.642 0 010-15.36A8.642 8.642 0 0116.32 0zM9.6 8.64c0-3.71 3.01-6.72 6.72-6.72h6.72v13.44H16.3a6.723 6.723 0 01-6.7-6.72zM23.04 23.91a9.249 9.249 0 000 .182v6.629h-6.72c-3.71 0-6.72-3.01-6.72-6.72 0-3.702 3-6.709 6.7-6.72H23.04v6.629zm1.92.171v-.16a6.723 6.723 0 016.692-6.64h.048c3.7.011 6.7 3.018 6.7 6.72 0 3.71-3.01 6.72-6.72 6.72a6.723 6.723 0 01-6.72-6.64zm1.29-6.8a8.705 8.705 0 00-1.29 1.29v-1.29h1.29zm5.45-1.92H24.96V1.92h6.72c3.71 0 6.72 3.01 6.72 6.72 0 3.702-3 6.709-6.7 6.72zM16.32 32.64c-3.71 0-6.72 3.01-6.72 6.72s3.01 6.72 6.72 6.72 6.72-3.01 6.72-6.72v-6.72h-6.72z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFigma;
