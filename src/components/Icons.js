import * as React from "react";

export const GithubIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h512v512H0z" />
    <path
      fill="currentColor"
      d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
    />
  </svg>
);

export const TwitterIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 209"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v209H0z" />
    <path
      fill="#55acee"
      d="M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"
    />
  </svg>
);
// #0A66C2
export const LinkedInIcon = ({ className, ...rest }) => (
  <svg
    width="800px"
    height="800px"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <circle cx={24} cy={24} r={20} fill="#0077B5" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.7747 14.2839C18.7747 15.529 17.8267 16.5366 16.3442 16.5366C14.9194 16.5366 13.9713 15.529 14.0007 14.2839C13.9713 12.9783 14.9193 12 16.3726 12C17.8267 12 18.7463 12.9783 18.7747 14.2839ZM14.1199 32.8191V18.3162H18.6271V32.8181H14.1199V32.8191Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.2393 22.9446C22.2393 21.1357 22.1797 19.5935 22.1201 18.3182H26.0351L26.2432 20.305H26.3322C26.9254 19.3854 28.4079 17.9927 30.8101 17.9927C33.7752 17.9927 35.9995 19.9502 35.9995 24.219V32.821H31.4922V24.7838C31.4922 22.9144 30.8404 21.6399 29.2093 21.6399C27.9633 21.6399 27.2224 22.4999 26.9263 23.3297C26.8071 23.6268 26.7484 24.0412 26.7484 24.4574V32.821H22.2411V22.9446H22.2393Z"
      fill="white"
    />
  </svg>
);

export const PinterestIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="#CB1F27"
      d="M0 128.002c0 52.414 31.518 97.442 76.619 117.239-.36-8.938-.064-19.668 2.228-29.393 2.461-10.391 16.47-69.748 16.47-69.748s-4.089-8.173-4.089-20.252c0-18.969 10.994-33.136 24.686-33.136 11.643 0 17.268 8.745 17.268 19.217 0 11.704-7.465 29.211-11.304 45.426-3.207 13.578 6.808 24.653 20.203 24.653 24.252 0 40.586-31.149 40.586-68.055 0-28.054-18.895-49.052-53.262-49.052-38.828 0-63.017 28.956-63.017 61.3 0 11.152 3.288 19.016 8.438 25.106 2.368 2.797 2.697 3.922 1.84 7.134-.614 2.355-2.024 8.025-2.608 10.272-.852 3.242-3.479 4.401-6.409 3.204-17.884-7.301-26.213-26.886-26.213-48.902 0-36.361 30.666-79.961 91.482-79.961 48.87 0 81.035 35.364 81.035 73.325 0 50.213-27.916 87.726-69.066 87.726-13.819 0-26.818-7.47-31.271-15.955 0 0-7.431 29.492-9.005 35.187-2.714 9.869-8.026 19.733-12.883 27.421a127.897 127.897 0 0 0 36.277 5.249c70.684 0 127.996-57.309 127.996-128.005C256.001 57.309 198.689 0 128.005 0 57.314 0 0 57.309 0 128.002Z"
    />
  </svg>
);

export const DribbbleIcon = ({ className, ...rest }) => (
  <svg
    width="800px"
    height="800px"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path
      fill="#1877F2"
      d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z"
    />
    <path
      fill="#ffffff"
      d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z"
    />
  </svg>
);

export const SunIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="4;2"
          />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          />
        </path>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0"
      >
        <set attributeName="opacity" begin="0.5s" to="1" />
      </path>
    </g>
    <g fill="currentColor" fillOpacity="0">
      <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
        <animate
          id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="3;12"
        />
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="1;10"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="currentColor"
      mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
    >
      <set attributeName="opacity" begin="0.5s" to="0" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.1s"
        dur="0.4s"
        values="6;10"
      />
    </circle>
  </svg>
);

export const MoonIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      <set attributeName="opacity" begin="0.6s" to="0" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="12;3"
        />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;1"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0"
    >
      <set attributeName="opacity" begin="0.6s" to="1" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.6s"
        dur="0.4s"
        values="10;6"
      />
    </circle>
  </svg>
);

export const CircularText = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1440}
    height={1440}
    viewBox="0 0 1080 1080"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path d="M556.4 140.1c-5.4 1.5-12.7 7.2-15.7 12-8.8 14.4-3.9 32.9 10.7 40.4 10.2 5.2 24.2 4.4 31.9-1.8l2.8-2.2-2.4-2.3-2.4-2.3-4.3 2.2c-15.9 8.3-35-3.8-32.6-20.7 1.6-11.7 10.4-19.4 22-19.4 4.2 0 11.7 2.9 14.8 5.7 1.5 1.3 1.9 1.3 4.2-.4 1.4-1 2.6-2.1 2.6-2.5 0-1.6-7.9-7-12.4-8.3-5.5-1.6-14.4-1.8-19.2-.4zM602.7 140.8c-.7 1.2-9.9 57.3-9.5 57.7.2.3 1.9.6 3.8.7l3.4.3 4.8-28.9c2.7-15.9 4.7-29 4.6-29.1-.9-.7-6.8-1.3-7.1-.7zM476.9 143.4c-8.8 3.1-13.6 9.5-12.6 16.9 1.2 8.6 6.3 12 20.7 13.7 5.2.6 10.5 1.6 11.9 2.3 6.4 3.1 5.7 10.6-1.3 13.8-5.2 2.4-16 2.5-21.6.3-4.6-1.9-4.5-1.9-5.4 1.8-1 4.5 3.6 6.3 15.9 6.3 8.8 0 10.7-.3 15-2.6 6.3-3.2 9.5-7.8 9.5-13.6 0-9.7-5-13.4-20.5-15.3-13.5-1.6-16.6-3.4-16.5-9.3.1-5.4 6.7-9.1 16-9 3.6 0 7.7.6 9.2 1.1 2.1.9 2.7.8 3.2-.4 1.2-3.3.6-5.5-2-6.4-3.6-1.4-17.2-1.2-21.5.4zM444.8 148.2l-2.8 1v48L427.9 179c-7.8-10-14.7-18.4-15.4-18.6-.6-.3-2.4 0-3.8.5L406 162v23.5c0 14.5-.4 23.4-.9 23-.6-.3-6.9-8.3-14.2-17.8-7.2-9.4-13.5-17.5-13.9-18-.5-.6-6.6.8-7.9 1.9-.2.2 7.3 10.1 16.5 22 9.3 12 17.4 22.5 18 23.3 1 1.3 1.8 1.3 5.3.3l4.1-1.3.2-23.2.3-23.2 13.9 17.8c7.7 9.7 14.5 17.7 15.1 17.7.7 0 2.7-.5 4.5-1.1l3.3-1.2-.7-11.1c-.3-6.1-.6-19.3-.6-29.4 0-10-.3-18.2-.7-18.1-.5 0-2 .5-3.5 1.1zM627.8 165.4c-5.8 2.1-8.5 4.2-11.3 9-5 8.5-4.3 18.3 1.8 25.2 14.1 16.1 38.7 6.8 38.7-14.7 0-8.8-6.3-16.7-15.8-19.5-5.6-1.7-8.6-1.7-13.4 0zm13.9 7.5c9.9 4.6 10.1 19.2.3 25.8-4.2 2.9-9.1 2.9-14 .2-5.3-3-7.4-7.3-6.8-13.8.6-6.1 3-9.9 7.9-12.3 4.3-2.3 7.4-2.2 12.6.1zM667.7 189.4c-6.1 14.3-6.8 18.5-4 24.3 3.2 6.8 14.1 11.5 21.6 9.5 3.5-1 3.6-1 2.6 1.5-.5 1.3-.9 2.6-.9 2.8 0 .4 6.3 2.6 6.6 2.3.4-.5 16.4-37.6 16.4-38.1 0-1.1-6.2-2.9-7-2.1-.4.5-2.7 5.4-5 10.9-4.4 10.6-8.5 16-12.7 16.8-6.8 1.3-15.3-4.5-15.3-10.3 0-1.8 2.3-8.6 5-15.1 2.8-6.5 5-12.3 5-12.7 0-.9-4.3-3.2-5.9-3.2-.4 0-3.3 6-6.4 13.4zM336 194.7c-1.4.9-2.7 1.8-2.9 1.9-.6.5 6.2 58.9 7 59.8 1.1 1.3 7-2.6 6.5-4.4-.3-.8-.7-4.2-1.1-7.6l-.7-6.1 12.8-7.6 12.8-7.6 6.2 4.5 6.3 4.4 3.6-2.1c2-1.2 3.5-2.3 3.3-2.4-2.8-2.3-50-34.5-50.6-34.5-.4 0-1.9.8-3.2 1.7zm18.8 17.3c5 3.6 9.2 6.7 9.2 7 0 .5-16.9 10.9-19.1 11.8-.9.4-1.5-2.7-3.2-17.5l-1.4-11.3 2.7 1.8c1.5.9 6.8 4.6 11.8 8.2zM755.6 211.7l-5.8 9.5-1.8-3.9c-7.4-16.2-29.7-16.3-38-.3-4.6 9-3.3 17.7 3.5 24.6 4.9 4.9 10 6.8 16.2 6.1l4.4-.5-1.7 2.6c-1.6 2.4-1.6 2.6.7 4.3 1.3 1 2.9 1.7 3.4 1.6 1.5-.5 31.5-48.9 30.9-49.9-.3-.4-1.7-1.4-3.2-2.2l-2.7-1.4-5.9 9.5zm-19.6 2.1c5.4 2.7 8.3 7.7 7.7 13.5-1 10.8-11.8 17.6-20.7 13-10.5-5.5-10.5-18.9 0-26.1 4-2.6 8.3-2.8 13-.4zM790 246.7c-5.8 6-14.5 14.9-19.4 20l-8.9 9.1 2.9 2.6 2.9 2.5 6-6 6.1-5.9 6.4 6.5c10.9 11 19.2 13.7 28 9.2 6.3-3.2 10.2-8.5 10.8-14.5.7-8.2-1.1-11.6-12.6-23.4-5.8-6-10.8-10.8-11.1-10.8-.4 0-5.4 4.8-11.1 10.7zm27.2 17.6c.9 4.4-.3 7.7-3.9 11.3-2.7 2.7-4.1 3.4-7.4 3.4-5.3 0-8.3-1.7-15.3-8.9l-5.9-6 8.4-9.2 8.3-9.1 7.7 7.9c4.3 4.5 7.8 9.1 8.1 10.6zM263 270.2c-2 3.4-2.5 5.4-2.1 9.8l.3 2.5-2.7-2.5-2.7-2.5-2.5 2.9c-2 2.4-2.2 3.1-1.1 4.1 15.2 14.1 29.1 26.5 29.7 26.5.4 0 1.8-1.1 3-2.4l2.2-2.3-5.8-5.6c-3.2-3-7.2-6.6-8.9-8.1-3.9-3.2-6.7-9.7-5.8-13.4.4-1.5 1.6-4 2.7-5.6l2-2.9-2.2-1.8c-3.1-2.6-3.8-2.4-6.1 1.3zM815.5 300.4c-8.2 6.8-15.1 12.9-15.3 13.5-.4 1.3 2.6 5.1 4.1 5.1.5 0 4.4-2.9 8.7-6.5 4.3-3.6 9.1-7.2 10.7-8 5.4-2.8 12.3-1.4 15.9 3.4 1 1.2 1.5 1.2 3.7-.5 1.5-1 2.7-2.5 2.7-3.1 0-1.7-6.8-6.1-10.7-6.9l-3.2-.6 2.1-1.8c2.1-1.7 2.1-1.8.5-4.4-1-1.4-2.3-2.6-3-2.5-.6 0-7.9 5.6-16.2 12.3zM240.2 301.1c-4.4 1.3-11.6 8.6-13.2 13.4-3.3 10.1 1.2 20.6 11 25.8 4.6 2.4 6.4 2.8 11.2 2.5 9.8-.7 18.5-8.6 20.7-18.8 1.3-6.2.7-8-3-8-2.5 0-2.9.4-2.9 2.9 0 9.7-9.7 18.3-18.6 16.6-2.5-.4-3.4-1-3-2 .3-.8 4.8-7.3 10-14.5l9.5-13-4.3-2.5c-5-2.9-12.4-3.9-17.4-2.4zM251 308c1.8 1 1.3 1.9-5.7 11.5-4.2 5.8-8 10.5-8.5 10.5-1.2 0-3.5-4.2-4.2-7.5-.9-4.4 2.9-11.5 7.4-13.7 3.9-2 8.2-2.3 11-.8zM846.2 318.4c-.9 2.1-.6 2.6 3.4 5.4 9.4 6.7 11.2 15.8 4.3 21-1.4 1.1-2.2.3-5.9-5.3-7.7-11.8-12.4-14.8-19.5-12.5-9.9 3.3-10 17.1 0 25.8 2 1.8 4.6 3.2 5.8 3.3h2.2l-2.2 1.6c-2.1 1.4-2.2 1.7-.7 4.4.8 1.6 1.9 2.9 2.5 2.9.5 0 6.5-3.6 13.3-8.1 16.5-10.8 19.2-15.6 14.7-25.5-3.1-6.9-11.9-15.4-15.9-15.4-.5 0-1.4 1.1-2 2.4zm-9.4 16.2c2.1 1.5 10.2 12.5 10.2 14 0 1.6-3.8 3.3-7.4 3.4-3.1 0-4.5-.7-7.7-3.9-4.9-4.9-5.6-10.1-1.7-13.4 2.5-2.1 3.7-2.1 6.6-.1zM212.5 342.8c-8 3.7-13 12.3-12.3 20.9l.5 5.2-2.7-1.4c-2.6-1.3-2.7-1.3-4.3 1.9l-1.5 3.3 25.4 13.5 25.3 13.6 2-3.4 2-3.4-8.9-4.6c-8.5-4.3-10.9-6.4-7.5-6.4 2.4 0 8.7-6.2 10.6-10.5 2.2-4.8 2.4-12.3.5-16.8-4.3-10.5-19.2-16.5-29.1-11.9zm16 8.7c15.9 9.3 3.2 33-13.2 24.6-7.4-3.7-10.7-10.5-8.4-17.4 1.1-3.4 5.3-8 8.1-9 3.7-1.3 9.5-.6 13.5 1.8zM863 360.9c-9.9 3-17 11.6-17 20.7 0 5 3.2 12.6 7 16.4 4.1 4.1 9.9 6.5 11.2 4.6 1.9-2.7.7-5.5-2.9-7.3-10.5-5.2-11-18.9-.8-24.8 9.7-5.8 20.7-.6 22.2 10.3.3 2.2 0 4.8-.6 6-.9 1.8-.7 2.4 1.9 4.2l3 2.2 1.6-3.9c3.2-7.5-.6-19.2-7.9-24.7-5.2-3.9-12.2-5.3-17.7-3.7zM190.5 391.8c-7.8 3.7-12.8 11.9-12.8 21.2 0 12.9 10.2 21.9 23.7 20.8 7-.6 12.6-4.2 16.3-10.5 2.4-4 2.8-5.9 2.8-11.9s-.4-7.7-2.7-11.2c-5.7-8.5-18.6-12.5-27.3-8.4zm15.5 8c15.3 7.6 6.6 30.7-10 26.2-12.1-3.3-15.7-16.8-6.5-24.9 2.9-2.5 4.4-3.1 8.3-3.1 2.6 0 6.3.8 8.2 1.8zM892.7 395.7c-1.5.4-1.7 1.1-1.2 3.1.4 1.5.7 3.1.8 3.6.1.6-5 2.8-11.3 5.1-6.3 2.2-12.5 4.6-13.7 5.3-2.8 1.5-5.3 6.2-5.3 9.7 0 3.1 2.5 9.3 4.7 11.7 1.6 1.8 1.7 1.7 3.9-.3 2.3-2.2 2.3-2.2.4-4.7-2.3-2.8-2.6-6.1-.7-8.5 1-1.4 22.1-9.7 24.7-9.7.5 0 1.7 2.5 2.6 5.5 1.5 4.8 2 5.4 3.8 4.9 3.6-1.1 3.9-2.1 2.2-7-.9-2.6-1.6-5.1-1.6-5.5 0-.5 1.8-1.4 4-2 4.4-1.3 4.4-1.3 2.9-5.7l-1-3.1-4.1 1.5c-5.2 1.8-4.7 1.9-5.9-1.6-1.1-3-1.7-3.2-5.2-2.3zM888.2 438.4c-10.6 2.8-19.3 5.5-19.3 5.9.1.4.1 1.5.1 2.4.1 4.6.9 4.5 21.1-.8 10.7-2.8 19.7-5.5 20.1-5.8 1-.8-.5-6.4-1.8-6.7-.5-.1-9.6 2.1-20.2 5zM151.6 437.2c-.3 1.7-.3 3.5.1 3.9 1.1.9 56.1 14.4 56.6 13.9.3-.3.8-1.9 1.1-3.6l.7-3.1-27.9-7.1c-15.3-4-28.4-7.2-28.9-7.2-.6 0-1.3 1.4-1.7 3.2zM908.4 451.5c-.4.9-.4 2.6-.2 3.9.5 2.4.1 2.5-11.1 4.6-13.8 2.6-17 3.8-19.9 7.5-2.8 3.5-2.9 9.7-.4 14.5 2.2 4.1 3.2 4.5 5.7 2.6 1.7-1.3 1.8-1.8.8-3.5-1.9-3-1.6-7.5.5-9.4 2-1.8 23.3-6.3 25.5-5.4.8.3 1.7 2.8 2.1 5.7.6 4.8.8 5.1 3.4 4.8 2.6-.3 2.7-.4 2.4-6.5l-.3-6.3 4.1-.6c3.5-.6 4-1 4-3.3 0-4.5-1.2-5.3-5.8-4.3l-4.2 1-.6-3.4c-.5-2.8-1.1-3.4-3-3.4-1.4 0-2.7.7-3 1.5zM172.5 461.9c-13 5.9-16.4 22.5-6.9 33.1 10.1 11.2 28.6 8.8 35.3-4.5 3.1-6.3 3.5-16.2.8-21.3-1.9-3.5-3.3-3.9-6.1-1.9-1.8 1.3-1.8 1.5-.1 4.7 3.9 7.6-.2 18.6-8.1 21.6-2.4.9-4.6 1.5-4.8 1.3-.2-.2.7-7.5 2.1-16.3 1.3-8.7 2.2-16.4 1.9-17.2-.8-2-9.2-1.7-14.1.5zm8.2 7.3c-.3 1.3-1.3 7.3-2.2 13.4-1.5 10.1-1.9 11.1-3.6 10.7-1-.3-3.2-2.1-4.9-4-7-8-1.1-22 9.4-22.3 1.4 0 1.7.5 1.3 2.2zM897.5 492.1c-8.2 1-16 1.8-17.2 1.8-1.9.1-2.1.5-1.6 3.8.3 2.1.7 3.9.7 4 .2.3 36.5-3.6 39.4-4.3 1.8-.3 2.2-1.1 2.2-3.9 0-3.5 0-3.5-4.2-3.4-2.4.1-11 1-19.3 2zM157 507.9v3.8l16 7.3c8.8 4.1 16 7.7 16 8 0 .4-7.3 3.7-16.2 7.3l-16.3 6.5-.3 4.1-.3 4 17.8-7.3c9.8-4 19.5-8 21.6-8.9 3.4-1.5 3.7-2 3.7-5.4v-3.8l-13.7-6.4c-7.6-3.5-17.1-7.9-21-9.7l-7.3-3.3v3.8zM893 511.6c-9.9 4.3-14.8 15.5-11.6 26.5 3.4 11.9 14.8 18 26.8 14.5 5.8-1.7 11.9-7 13.8-12.1 2.8-7.2.7-18.9-4.3-24.4-5.2-5.6-17-7.8-24.7-4.5zm17.4 8.2c4.3 2.5 6.8 7.8 6.3 13.1-1.5 13.8-19.6 17.9-27.4 6.2-2.6-3.8-2.9-8.7-1-13.4 3.3-7.8 13.9-10.6 22.1-5.9zM171.7 553c-12 3.6-17.2 18.1-10.9 30.1 8.5 16.3 34.2 13.4 39.1-4.4 2.3-8.1-.3-19.1-5.6-23.9-1.9-1.7-2.1-1.7-4.2.6-1.5 1.6-1.9 2.6-1.2 3.1.6.3 2 2.4 3.1 4.5 3.8 7.5 1.7 17.4-4.4 21.1-1.7 1-3.4 1.9-3.7 1.9-.5 0-3.9-28.7-3.9-32.8 0-1.4-4-1.5-8.3-.2zm3.6 10.2c.3 1.8.9 6.9 1.2 11.3.4 4.4.9 8.8 1.1 9.7.8 2.6-3.5 2.3-7.7-.5-6.8-4.5-7.4-14.4-1.4-20.4 4.2-4.2 6.1-4.2 6.8-.1zM879.8 564.4c-.5 4.2-1 4 12.2 5.6 12.3 1.6 15.5 2.7 18.4 6.1 4.3 5.1 3 16-2.3 18.9-2.7 1.4-8.7 1.2-21-.5-5.7-.8-10.5-1.4-10.7-1.2-.1.1-.5 1.8-.9 3.8l-.7 3.6 14.4 1.8c8.6 1.1 16 1.5 18.3 1.1 10.1-1.9 15.4-15.5 10.5-26.5l-2-4.3 2.4.4c2.7.5 3.6-.7 3.6-4.6 0-2.5.4-2.4-37.6-7.3-4.1-.5-4.2-.5-4.6 3.1zM173.7 602.6c-7.1 2.2-15 10.2-17.1 17.3-.9 3-1.6 7.1-1.6 9.2 0 3.1 6.5 30.8 7.5 31.7.4.5 52.4-13.4 53.2-14.2.7-.7-4.1-19.8-6.9-27.4-5.3-14.2-20.1-21.2-35.1-16.6zm17.1 8c4.2 1.7 8.8 5.7 10.7 9.4.7 1.4 2.4 6.7 3.8 11.7l2.6 9.3-2.7.7c-1.5.3-10.6 2.7-20.2 5.3l-17.5 4.7-1.7-5.1c-3.1-9.6-4.1-17.7-2.8-22.5 3-11.3 16.9-18.1 27.8-13.5zM878.9 614c-10.4 5.5-15.5 19.9-10.8 30.4 1.1 2.4 1.3 2.4 4 1.1 2.6-1.4 2.7-1.7 1.7-4.6-3.1-9 2.8-19.7 12-21.5 4.2-.8 4.2-.8-1 17.6-2.3 8.3-3.8 15.3-3.4 15.7.3.4 3.3.9 6.5 1.1 12.9.9 22.1-8 22.1-21.5 0-14.5-18.1-25.2-31.1-18.3zm20.8 10.3c5.6 5 5 14.1-1.2 19.6-2.5 2.2-4.6 3.1-7 3.1-1.9 0-3.5-.3-3.5-.6 0-.4.9-3.7 1.9-7.3 1.1-3.6 2.7-9.2 3.6-12.4 1.7-6.1 2-6.2 6.2-2.4zM858 657.9c-.6 1.6-.9 3.4-.6 3.9.3.5 5.1 2.6 10.7 4.8 6.3 2.4 11.5 5.1 13.7 7.1 3.4 3.2 3.5 3.4 3 9.6-.5 6.3-.5 6.4 2.4 7.5 2.7 1 3 .9 3.9-1.6 1.1-2.8.8-9.4-.5-12.5-.8-1.6-.6-1.6 1.8-.6 3 1.4 4.1.7 5.1-3.1.6-2.5.1-2.8-17.2-9.7-9.8-4-18.5-7.5-19.4-7.8-1.1-.4-2 .3-2.9 2.4zM227.9 703c-2.9 7.7-5.8 14-6.4 14-.5 0-5.8-1.3-11.7-2.9-6-1.6-10.8-2.5-10.8-2.1 0 .4 1 2.2 2.3 4 2 3 3.6 3.7 16 7.5 7.6 2.3 13.7 4.6 13.6 5.1-.1.5-7.1 5-15.5 9.9l-15.3 9.1 2 3.3 2 3.2 3.2-1.9c1.7-1.1 13.2-7.9 25.5-15.1l22.3-13.2-1.8-2.9c-.9-1.7-2-3-2.4-3-.4 0-2.7 1.2-5.3 2.6-4.5 2.5-4.6 2.5-10.1.9-3-.8-5.5-1.8-5.5-2 0-.3 1.8-5.3 4-11.1 2.2-5.9 4-11.2 4-12 0-1.5-3.2-7.4-4.1-7.4-.3 0-3 6.3-6 14zM843.7 708.1c-9.5 2.3-19.1 10.8-22.1 19.6-2 5.7-2.2 16.3-.3 16.3 4.7-.1 5.7-1.2 5.7-6.3 0-13.8 13.9-25.2 26.6-21.8 13.8 3.7 20.4 18.4 13.9 31.1-2.7 5.2-7.3 9.4-11.7 10.5-2.8.7-3.3 2-2.2 6.2.5 1.8 1 2 3.5 1.3 14.3-4.1 23.8-22.4 19.5-37.2-3.8-13.3-19.8-22.9-32.9-19.7zM253.3 734.7c-.7.3-1.3 1.7-1.3 3.3 0 2.9 1.5 4 5.2 4 2.9 0 8.4 5.9 9.6 10.3 1 3.7.5 7.4-1.7 11.5-1.6 3.1-9.2 7.2-13.2 7.2-7.3 0-13.9-7-13.9-14.7 0-3.7-.3-4.2-3-5.2-3.8-1.3-4.4-.2-3.8 7.2.5 6.3 4.2 12.3 10 16.4 3.7 2.5 5 2.8 11.7 2.8 6.7 0 8.1-.3 11.9-2.9 10.5-7.1 12.8-19.8 5.5-30.7-3.8-5.7-12.8-10.6-17-9.2zM807.2 751.2c-7.9 2.7-16.2 13.4-16.2 21.1 0 3.4.2 3.7 3 3.7 2.4 0 3-.4 3-2.2 0-3.5 3.9-10.6 7.1-12.9 1.6-1.1 4.4-2.5 6.2-3 3.5-.9 8.9.1 9.4 1.8.2.6-4.3 6.6-10.2 13.3-5.8 6.7-10.5 12.6-10.5 13.1s1.9 2.1 4.2 3.6c3.6 2.4 5.2 2.8 11.3 2.8 6.1 0 7.7-.4 11.3-2.7 9.6-6.4 12.5-18.9 6.7-28.4-5.5-8.8-16.4-13.2-25.3-10.2zm20.4 16.3c1.9 4.7 1.8 7.1-.7 11.5-2.7 4.7-6.6 7-12.1 7-5.8 0-7.5-1.1-5.7-3.7 3.2-4.5 15.5-18.3 16.2-18.3.4 0 1.5 1.6 2.3 3.5zM277.3 776.2c-10.8 11-13.3 14.8-13.3 20.1 0 7 9.3 17.2 18.2 19.9 3.3 1 4.1.9 4.9-.3 1.8-2.9.9-4.6-3.5-6.3-6.1-2.3-11.6-8.5-11.6-13 0-1.9.9-4.4 1.9-5.7l1.9-2.3 7.1 6.6c8.8 8.4 13.5 10.2 19 7.2 4.9-2.6 7.6-7.8 6.7-12.8-1.2-6.5-10.1-14.6-16.1-14.6-2.8 0-3.2-1.2-1-3 1.4-1.2 1.3-1.6-.6-3.7-1.3-1.2-2.5-2.3-2.8-2.3-.4 0-5.2 4.6-10.8 10.2zm19.3 6.3c1.7 1.3 3.7 3.8 4.4 5.5 1.1 2.8 1.1 3.4-.7 5.8-3.5 4.7-6.3 4.1-13.7-2.9-6.5-6-6.6-6.2-4.9-8.2 3.9-4.2 9.4-4.3 14.9-.2zM775.8 781.6l-2.7 2.7 7.6 8.1c4.2 4.5 8.4 9.4 9.4 11.1 3.1 4.9 2.3 10.1-2.2 15.1-1.9 2-1.9 2.1.7 4.5l2.6 2.4 2.8-3.4c1.6-1.8 3.2-5.1 3.5-7.3l.7-4 2.2 2.1 2.2 2.1 2.4-2.5 2.3-2.4-6.6-7.3c-3.6-4-10.1-11-14.4-15.6l-7.8-8.3-2.7 2.7zM314.2 798c-.9 2.4-.8 3 .3 3 .8 0 2.9 1.3 4.7 2.9 3 2.7 3.2 3.2 2.2 5.9-.6 1.6-4.4 7-8.4 12l-7.3 9.2-4.3-3.5c-5-4.1-5.5-4.2-7.3-1.3-1.3 2.1-1.1 2.5 2.8 5.8 2.2 1.9 4.1 3.9 4.1 4.4 0 .4-1.1 2.1-2.5 3.8l-2.5 2.9 2.8 2.5 2.7 2.4 3.2-3.6 3.2-3.6 2.8 2.2 2.8 2.1 1.8-2.2c1.7-2.2 1.7-2.3-.7-4.8l-2.5-2.6 8.3-10.7c4.6-5.9 8.7-11.9 9-13.3 1.6-6.4-3.7-13.3-12-15.9-1.8-.5-2.4-.1-3.2 2.4zM747.2 806.1c-4 2-8.2 6.5-8.2 8.8 0 .6.9 1.5 2 2.1 1.8.9 2.5.6 4.9-1.9 3.1-3.3 6.6-4 9.3-1.9.8.7 4.8 5.5 8.8 10.6 7.2 9.3 7.2 9.3 5.1 10.9-1.2.8-3.4 2.5-4.9 3.8l-2.7 2.4 2.2 2.2 2.2 2.2 4.5-3.6 4.4-3.7 2.9 3.7 3 3.6 3.1-2.3 3.1-2.3-3-3.6-2.9-3.6 2.5-1.8c2.9-2.2 3.1-3.4.9-5.8-1.6-1.8-1.8-1.8-4.1.1-1.4 1.1-2.9 1.7-3.4 1.4-.5-.3-4.3-4.9-8.5-10.4-7.1-9.2-11.6-13-15.6-13-.7 0-3.2 1-5.6 2.1zM336.8 820c-3.3 2.5-5.2 7.3-4.4 10.6.4 1.4 3.8 5.9 7.6 9.9 7.5 7.9 8.8 11.5 4.9 13.5-3.5 1.9-7.9.1-13.7-5.7-5.3-5.2-5.5-5.3-7.8-3.8-1.3.8-2.4 2-2.4 2.5 0 .6 2 3 4.4 5.5 10.6 10.5 22.8 12.1 27.9 3.6 3.6-6.1 1.6-11.1-7.7-19.2-7.2-6.3-7.2-11.9-.1-11.9 4 0 10.9 4.9 14.4 10.2 2.3 3.6 2.4 3.7 5.2 2.2 1.6-.8 2.9-1.8 2.9-2.1 0-.4-1.2-2.4-2.6-4.5-7.2-10.3-22.1-16-28.6-10.8zM727.8 819.8c-1.6.9-2.8 1.9-2.8 2.3 0 .5 21.4 33.5 22.5 34.7.8.9 6.5-3.4 6.1-4.5-.6-1.3-22.5-34.3-22.9-34.3-.1 0-1.4.8-2.9 1.8zM708.7 831.6l-2.8 1.5 3.3 5.7c1.8 3.1 5.8 10.2 8.9 15.7l5.8 10-5 2.8c-5.2 3-5.5 3.6-3.8 6.8 1 2 1.2 1.9 6.4-1l5.5-3.1 1.5 3c.8 1.6 1.5 3.8 1.5 4.9 0 2.7-3.8 6.1-6.8 6.1-2 0-2.3.4-2 3.2.3 3 .6 3.3 3.3 3 4.7-.5 10.8-5.2 12.2-9.5 1.3-3.7.9-5.7-2.1-12.9-.6-1.2 0-2.1 2.4-3.3 3-1.6 3.1-1.6 1.4-4.4l-1.7-2.9-3.1 1.9-3.1 1.8-8.6-15.1c-4.7-8.4-8.9-15.3-9.5-15.4-.5-.2-2.2.4-3.7 1.2zM686.3 843.2c-1.3.6-2.3 1.5-2.3 1.9 0 .4 4 9.1 8.9 19.3l9 18.6 3.4-1.6 3.5-1.7-8.5-17.6c-4.7-9.7-8.7-18.2-9-18.9-.6-1.4-2-1.4-5 0zM400.6 851.2c-.7 1.8-5.7 13.6-11.1 26.3-5.3 12.6-9.9 23.3-10.1 23.7-.7 1.1 5.7 4.1 6.6 3.1.8-.8 21.8-49.5 22.7-52.4.3-1.2-.5-2-2.8-2.8-1.7-.6-3.4-1.1-3.5-1.1-.2 0-1 1.5-1.8 3.2zM658.5 854.9c-5.4 1.4-10.4 4.3-13.5 7.7-3.7 4.3-3.8 5.7-.3 7.5 2.3 1.2 2.7 1.2 3.1-.1 1.9-5.5 12.5-10.1 19.1-8.2 4.2 1.3 9 5.8 7.5 7-.5.5-7 3-14.4 5.7-18.7 6.7-17.4 5.7-14.9 10.8 2.8 5.6 4.6 7.5 9.4 9.9 8.9 4.6 21 1.4 27-7.1 2.7-3.8 3-5.1 3-11.4 0-6.1-.4-7.9-2.8-11.9-4.5-7.8-14.7-12.1-23.2-9.9zm19.1 24.4c-1.2 6.6-7.5 11.7-14.3 11.7-3.3 0-8.8-3.1-10.2-5.8-.9-1.8 0-2.3 11.2-6.5 6.7-2.5 12.6-4.1 13.1-3.7.5.5.6 2.4.2 4.3zM411.6 882.8c-9.3 26-9.8 27.6-8 28.9 2.8 2.1 5.1 1.5 6.3-1.5 2.9-7.3 18.1-50.7 18.1-51.7 0-.6-1.5-1.6-3.3-2.2l-3.3-1-9.8 27.5zM439.5 863.3c-1.5 4.6-9.6 39.9-9.3 40.2.2.3 1.9.6 3.7.7l3.4.3 3.1-12c3.7-14.1 4.6-15.9 8.8-18.1 7.7-4 17.8 1.2 17.8 9.2 0 2.9-3.2 17.6-5.6 25.6-.4 1.3.4 1.9 3.2 2.7 2.1.6 3.9.9 4 .8.8-.9 6.4-27.4 6.4-30.2 0-7.5-5.7-13.6-14.4-15.6-5.3-1.1-6.4-1-13 1.7-1.6.6-1.8.4-1.4-1.9.3-1.5.5-2.7.4-2.7-.1 0-1.6-.4-3.4-.9-2.4-.7-3.4-.7-3.7.2zM611.7 868.4c-3.1.8-6.3 2.7-8.7 5.1-3.7 3.6-3.8 3.7-4.2 1.4-.2-2-.8-2.4-3.6-2.2-1.8 0-3.5.3-3.7.5-.3.2 2.2 13 5.5 28.3 3.3 15.4 6 28.3 6 28.8 0 .6 6.7 0 7.7-.7.1-.1-2.1-11-4.2-20.3l-.5-2.1 4.9 2c8.5 3.6 18.7.3 24.6-8 2.6-3.8 3-5.2 3-11.1 0-15.8-12.2-25.7-26.8-21.7zm13.4 8.7c8.2 5.8 7.6 20.4-1.2 25.1-9 4.8-18.6.2-21-10.1-2.9-12.8 11.6-22.6 22.2-15zM515.6 879.7c-.3 2.1-.8 7.1-1.2 11.2l-.6 7.4-5.7-.6c-3.1-.3-9.2-.9-13.7-1.3l-8.1-.7-.7 2.8c-.4 1.5-.3 3.1.1 3.5.4.4 6.6 1.2 13.7 1.9 7.1.6 13.1 1.3 13.3 1.4.5.6-1 16.5-1.7 17.8-.6.9-3.9.9-15.4-.1-8-.7-14.9-1.1-15.1-.8-.3.3-.7 1.8-.8 3.4l-.2 2.8 17 1.7c9.4 1 18.1 1.8 19.6 1.8l2.5.1 2.3-24.3c1.2-13.3 2.5-25.9 2.8-28l.6-3.7h-4.1c-3.9 0-4 .1-4.6 3.7z" />
  </svg>
);

export const LinkArrow = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
    />
  </svg>
);

