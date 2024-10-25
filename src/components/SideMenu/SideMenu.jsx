import React from "react";
import "./SideMenu.scss";

export default function SideMenu() {
  return (
    <menu className="side-menu">
      <ul>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            data-slot="icon"
            class="w-full p-px"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
            ></path>
          </svg>
        </li>
        <li>
          <svg
            class="w-full p-px"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.56439 16.9906C9.56439 18.4923 8.48326 19.2708 7.14962 19.2708C5.81598 19.2708 4.73485 18.4923 4.73485 16.9906M9.56439 16.9906C9.56439 15.489 8.48326 14.5833 7.14962 14.5833C5.81598 14.5833 4.73485 15.489 4.73485 16.9906M9.56439 16.9906H20.8333M4.73485 16.9906H3.125"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M14.3985 8.54744C14.3985 7.04578 15.4796 6.26727 16.8133 6.26727C18.1469 6.26727 19.228 7.04578 19.228 8.54744M14.3985 8.54744C14.3985 10.0491 15.4796 10.9548 16.8133 10.9548C18.1469 10.9548 19.228 10.0491 19.228 8.54744M14.3985 8.54744H3.12956M19.228 8.54744H20.8379"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </li>
        <li>
          <svg
            class="w-full"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.48 20.5723C18.48 20.5723 23.9253 16.6121 23.9253 11.9918C23.9253 10.4164 23.3516 8.90542 22.3304 7.79139C21.3092 6.67737 19.9241 6.05151 18.48 6.05151C17.0358 6.05151 15.6507 6.67737 14.6296 7.79139C13.6084 8.90542 13.0347 10.4164 13.0347 11.9918C13.0347 16.6121 18.48 20.5723 18.48 20.5723ZM20.2951 11.4968C20.2951 12.4993 19.4825 13.3119 18.48 13.3119C17.4776 13.3119 16.6649 12.4993 16.6649 11.4968C16.6649 10.4944 17.4776 9.68172 18.48 9.68172C19.4825 9.68172 20.2951 10.4944 20.2951 11.4968Z"
              fill="currentColor"
            ></path>
            <path
              d="M4.93164 11.3186C7.36258 10.5082 12.2244 11.7238 8.17289 14.965C2.288 19.6729 8.1729 23.4733 18.7069 19.0165"
              stroke="currentColor"
              stroke-width="1.62062"
            ></path>
            <circle
              cx="4.52629"
              cy="5.6464"
              r="3.6464"
              stroke="currentColor"
              stroke-width="1.62062"
            ></circle>
            <line
              x1="4.5265"
              y1="9.69789"
              x2="4.5265"
              y2="11.3185"
              stroke="currentColor"
              stroke-width="2.43094"
              stroke-linecap="round"
            ></line>
          </svg>
        </li>
        <li>
          <svg
            width="31"
            height="22"
            viewBox="0 0 31 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-full p-0.5"
          >
            <path
              d="M11.0144 9.48757L12.9801 4.17738C13.076 3.89888 13.491 3.96526 13.487 4.25847L13.4433 7.4747C13.4411 7.63547 13.5865 7.75727 13.7468 7.72887L15.2364 7.4747C15.4228 7.44165 15.5794 7.60954 15.5314 7.79099L13.6554 13.8046C13.5751 14.1082 13.1215 14.0394 13.1437 13.7269L13.4432 9.50461C13.455 9.33815 13.3065 9.20638 13.1403 9.23584L11.3038 9.82189C11.1092 9.85639 10.9505 9.67302 11.0144 9.48757Z"
              fill="currentColor"
              stroke="currentColor"
              stroke-width="1"
            ></path>
            <path
              d="M4 18C1.6 18 1 16.6667 1 16V10.5C1 9.5 1.5 9 2 8.5C2.5 8 3 7 3.5 4C3.9 1.6 6.33333 1 7.5 1H14.5C17.7 1 18.9916 1.98883 20.5 4C22 6 22 6.5 23.5 8C24 8.5 25.9 9.6 27.5 10C29.1 10.4 29.5 12.1667 29.5 13C29.5 13 29.5 13.5 29.5 15.5C29.5 17.5 27.617 18 26.6755 18H25.5M11 18C14.2059 18 14.7775 18 18.5 18"
              stroke="currentColor"
              stroke-width="2.2"
            ></path>
            <circle
              cx="7.875"
              cy="17.375"
              r="3.375"
              stroke="currentColor"
              stroke-width="2.2"
            ></circle>
            <circle
              cx="21.875"
              cy="17.375"
              r="3.375"
              stroke="currentColor"
              stroke-width="2.2"
            ></circle>
          </svg>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 26"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-full p-1"
          >
            <path d="M10.7709 19.1501C10.0954 19.2937 9.41905 19.4689 8.74576 19.6746L8.02848 19.8937C6.88707 20.2423 5.65391 20.1233 4.60027 19.5627C3.54663 19.0022 2.75882 18.046 2.41016 16.9046C2.0615 15.7632 2.18054 14.53 2.7411 13.4764C3.30165 12.4228 4.25781 11.635 5.39922 11.2863L6.1165 11.0672C6.78979 10.8615 7.44857 10.6289 8.08903 10.3705M10.7709 19.1501C11.2939 19.9962 11.8821 20.7889 12.5259 21.5239C12.9228 21.9778 12.9368 22.6636 12.5246 23.1043L12.0072 23.6596C11.5732 24.1247 10.8364 24.1396 10.4122 23.6648C9.4056 22.5388 8.52438 21.3067 7.78405 19.9903M10.7709 19.1501C9.95729 17.8319 9.31696 16.4145 8.86569 14.9327C8.40236 13.4159 8.1491 11.8851 8.08903 10.3705M10.7709 19.1501C13.7951 18.5024 16.9165 18.4492 19.961 18.9934M8.08903 10.3705C10.959 9.21775 13.5773 7.51768 15.798 5.36507M19.961 18.9934C19.9592 19.3913 19.947 19.7861 19.9263 20.1804M19.961 18.9934C19.9691 17.1575 19.7656 15.3269 19.3547 13.5375M15.798 5.36507C15.5754 5.03772 15.3447 4.71598 15.1059 4.40016M15.798 5.36507C16.8306 6.8831 17.6848 8.51499 18.3439 10.2285M18.3439 10.2285C18.938 10.4789 19.4219 10.9814 19.6249 11.6461C19.828 12.3108 19.7075 12.998 19.3547 13.5375M18.3439 10.2285C18.7589 11.3061 19.0967 12.412 19.3547 13.5375"></path>
            <path d="M20 4.87671L24.1196 0.999978"></path>
            <path d="M23.7 16L29.3458 16.3531"></path>
            <path d="M23.0413 10.2L28.2701 8.04148"></path>
          </svg>
        </li>
        <li>
          <svg
            class="w-full p-[5px]"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="10"
              cy="10"
              r="9"
              stroke="currentColor"
              stroke-width="2"
            ></circle>
            <rect x="9" y="9" width="2" height="6" fill="currentColor"></rect>
            <rect x="9" y="5" width="2" height="2" fill="currentColor"></rect>
          </svg>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
            class="w-5 min-w-5 mr-2 text-secondary-light"
          >
            <path
              fill-rule="evenodd"
              d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0Zm-6 3.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7.293 5.293a1 1 0 1 1 .99 1.667c-.459.134-1.033.566-1.033 1.29v.25a.75.75 0 1 0 1.5 0v-.115a2.5 2.5 0 1 0-2.518-4.153.75.75 0 1 0 1.061 1.06Z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </li>
      </ul>
    </menu>
  );
}
