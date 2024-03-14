import React from "react";
import Navbar from "./components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function ThankYouPage() {
  return (
    <div className="w-screen h-screen bg-lightMode-background flex flex-col justify-center items-center gap-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="110"
        height="113"
        viewBox="0 0 110 113"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M61.6074 37.706L70.1401 29.2365L71.8143 35.4385L62.3004 44.8819C61.1235 46.0501 61.1235 47.9441 62.3004 49.1122C63.4773 50.2804 65.3854 50.2804 66.5623 49.1122L76.3832 39.3641L77.4782 40.2027L73.4989 44.1525C72.322 45.3206 72.322 47.2146 73.4989 48.3828C74.6758 49.5509 76.5839 49.5509 77.7607 48.3828L82.2896 43.8875L87.4124 47.8109L79.0438 56.1174C77.8669 57.2856 77.8669 59.1796 79.0438 60.3477C80.2207 61.5159 82.1288 61.5159 83.3057 60.3477L94.0456 49.6874C94.6759 49.0618 94.9686 48.228 94.9238 47.4091C94.9362 47.1133 94.9043 46.8106 94.823 46.5095L91.7117 34.9841C91.6804 34.8683 91.6427 34.7558 91.599 34.6471L108.721 17.6521C108.921 17.4537 109.087 17.2344 109.219 17.0012C109.272 16.943 109.323 16.8822 109.372 16.819C110.389 15.511 110.145 13.6326 108.827 12.6234L93.83 1.13769C93.3285 0.753599 92.7438 0.550773 92.1557 0.518976C91.2755 0.420366 90.3599 0.706082 89.6848 1.37612L57.3455 33.4758C56.1686 34.6439 56.1686 36.5379 57.3455 37.706C58.5224 38.8742 60.4305 38.8742 61.6074 37.706ZM89.216 10.3021L92.14 7.39971L102.518 15.3481L99.5943 18.2505L89.216 10.3021ZM75.1504 24.2634L84.9188 14.5674L95.2972 22.5158L85.5918 32.1491L75.1504 24.2634Z"
          fill="#21201C"
        />
        <path
          d="M18.4491 28.266C22.7764 28.266 26.2844 24.7839 26.2844 20.4887C26.2844 16.1934 22.7764 12.7114 18.4491 12.7114C14.1217 12.7114 10.6137 16.1934 10.6137 20.4887C10.6137 24.7839 14.1217 28.266 18.4491 28.266Z"
          fill="#21201C"
        />
        <path
          d="M21.4052 40.45L36.2172 50.9951C35.6627 52.531 36.2651 54.2901 37.7329 55.1502L49.1717 61.8528L55.9706 95.5577C56.3183 97.2814 57.8969 98.449 59.6168 98.34C59.793 98.3671 59.9735 98.3812 60.1574 98.3812H97.0439C97.2164 98.3812 97.386 98.3688 97.5519 98.3449C99.1321 98.2876 100.525 97.1642 100.849 95.5578L107.187 64.1399C107.566 62.2608 106.338 60.4326 104.445 60.0563C102.552 59.6801 100.71 60.8984 100.331 62.7774L94.5493 91.4415H62.2706L55.7097 58.9166C55.4685 57.7206 54.6346 56.7923 53.5721 56.3725L41.2871 49.1741C41.224 49.1371 41.1602 49.1023 41.0958 49.0697L23.407 31.5121C22.548 30.6594 21.3829 30.1804 20.168 30.1804H19.2122C17.3341 29.971 15.6203 31.286 15.3607 33.1549L10.126 70.8449C10.0791 71.1826 10.0829 71.5157 10.1315 71.8366L10.1315 90.1452L0.702718 102.582C-0.458152 104.113 -0.148637 106.289 1.39404 107.441C2.93672 108.593 5.12838 108.286 6.28925 106.755L10.1315 101.687V108.073C10.1315 109.989 11.6966 111.543 13.6273 111.543C15.558 111.543 17.1231 109.989 17.1231 108.073L17.1231 71.4598C17.1231 71.4082 17.1219 71.3569 17.1197 71.3059L21.4052 40.45Z"
          fill="#21201C"
        />
        <path
          d="M67.0284 105.919C67.0284 109.554 64.0601 112.5 60.3985 112.5C56.7368 112.5 53.7685 109.554 53.7685 105.919C53.7685 102.285 56.7368 99.3384 60.3985 99.3384C64.0601 99.3384 67.0284 102.285 67.0284 105.919Z"
          fill="#21201C"
        />
        <path
          d="M95.3563 112.5C99.0179 112.5 101.986 109.554 101.986 105.919C101.986 102.285 99.0179 99.3384 95.3563 99.3384C91.6947 99.3384 88.7264 102.285 88.7264 105.919C88.7264 109.554 91.6947 112.5 95.3563 112.5Z"
          fill="#21201C"
        />
        <path
          d="M81.2526 67.1524C81.2526 65.5004 79.9034 64.1611 78.239 64.1611C76.5746 64.1611 75.2254 65.5004 75.2254 67.1524V75.9514L74.0594 74.794C73.0313 73.7736 71.3645 73.7736 70.3364 74.794C69.3083 75.8145 69.3083 77.469 70.3364 78.4894L75.6551 83.7687C75.8 84.0076 75.9775 84.2247 76.1815 84.414C76.2382 84.4831 76.2989 84.5499 76.3637 84.6142C77.3844 85.6273 79.0346 85.6346 80.0644 84.6361C80.097 84.6068 80.129 84.5765 80.1605 84.5453C80.1838 84.5222 80.2065 84.4988 80.2287 84.475C80.3305 84.3861 80.4262 84.2905 80.5152 84.1889L86.1877 78.5584C87.2158 77.5379 87.2158 75.8834 86.1877 74.863C85.1597 73.8425 83.4928 73.8425 82.4648 74.863L81.2526 76.0662V67.1524Z"
          fill="#21201C"
        />
      </svg>
      <h1 className="text-3xl font-bold">merci pour votre achat !</h1>
      <Link to="/">
        <Button>retourner à la page d'accueil</Button>
      </Link>
      <Navbar />
    </div>
  );
}

export default ThankYouPage;