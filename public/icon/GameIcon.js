const GameIcon = ({ color }) => {
  return (
    <svg
      width="52"
      height="45"
      viewBox="0 0 52 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        fill: color,
      }}
    >
      <path d="M8.47 37.07C8.19933 36.5007 7.80733 36.062 7.294 35.754C6.78067 35.4367 6.18333 35.278 5.502 35.278C4.82067 35.278 4.20467 35.4367 3.654 35.754C3.11267 36.062 2.68333 36.51 2.366 37.098C2.058 37.6767 1.904 38.3487 1.904 39.114C1.904 39.8793 2.058 40.5513 2.366 41.13C2.68333 41.7087 3.11267 42.1567 3.654 42.474C4.20467 42.782 4.82067 42.936 5.502 42.936C6.454 42.936 7.238 42.6513 7.854 42.082C8.47 41.5127 8.82933 40.7427 8.932 39.772H5.04V38.736H10.29V39.716C10.2153 40.5187 9.96333 41.256 9.534 41.928C9.10467 42.5907 8.54 43.118 7.84 43.51C7.14 43.8927 6.36067 44.084 5.502 44.084C4.59667 44.084 3.77067 43.874 3.024 43.454C2.27733 43.0247 1.68467 42.432 1.246 41.676C0.816667 40.92 0.602 40.066 0.602 39.114C0.602 38.162 0.816667 37.308 1.246 36.552C1.68467 35.7867 2.27733 35.194 3.024 34.774C3.77067 34.3447 4.59667 34.13 5.502 34.13C6.538 34.13 7.45267 34.3867 8.246 34.9C9.04867 35.4133 9.632 36.1367 9.996 37.07H8.47ZM11.4985 40.136C11.4985 39.352 11.6572 38.666 11.9745 38.078C12.2918 37.4807 12.7258 37.0187 13.2765 36.692C13.8365 36.3653 14.4572 36.202 15.1385 36.202C15.8105 36.202 16.3938 36.3467 16.8885 36.636C17.3832 36.9253 17.7518 37.2893 17.9945 37.728V36.328H19.2825V44H17.9945V42.572C17.7425 43.02 17.3645 43.3933 16.8605 43.692C16.3658 43.9813 15.7872 44.126 15.1245 44.126C14.4432 44.126 13.8272 43.958 13.2765 43.622C12.7258 43.286 12.2918 42.8147 11.9745 42.208C11.6572 41.6013 11.4985 40.9107 11.4985 40.136ZM17.9945 40.15C17.9945 39.5713 17.8778 39.0673 17.6445 38.638C17.4112 38.2087 17.0938 37.882 16.6925 37.658C16.3005 37.4247 15.8665 37.308 15.3905 37.308C14.9145 37.308 14.4805 37.42 14.0885 37.644C13.6965 37.868 13.3838 38.1947 13.1505 38.624C12.9172 39.0533 12.8005 39.5573 12.8005 40.136C12.8005 40.724 12.9172 41.2373 13.1505 41.676C13.3838 42.1053 13.6965 42.4367 14.0885 42.67C14.4805 42.894 14.9145 43.006 15.3905 43.006C15.8665 43.006 16.3005 42.894 16.6925 42.67C17.0938 42.4367 17.4112 42.1053 17.6445 41.676C17.8778 41.2373 17.9945 40.7287 17.9945 40.15ZM30.6614 36.188C31.2588 36.188 31.7908 36.314 32.2574 36.566C32.7241 36.8087 33.0928 37.1773 33.3634 37.672C33.6341 38.1667 33.7694 38.7687 33.7694 39.478V44H32.5094V39.66C32.5094 38.8947 32.3181 38.3113 31.9354 37.91C31.5621 37.4993 31.0534 37.294 30.4094 37.294C29.7468 37.294 29.2194 37.5087 28.8274 37.938C28.4354 38.358 28.2394 38.9693 28.2394 39.772V44H26.9794V39.66C26.9794 38.8947 26.7881 38.3113 26.4054 37.91C26.0321 37.4993 25.5234 37.294 24.8794 37.294C24.2168 37.294 23.6894 37.5087 23.2974 37.938C22.9054 38.358 22.7094 38.9693 22.7094 39.772V44H21.4354V36.328H22.7094V37.434C22.9614 37.0327 23.2974 36.7247 23.7174 36.51C24.1468 36.2953 24.6181 36.188 25.1314 36.188C25.7754 36.188 26.3448 36.3327 26.8394 36.622C27.3341 36.9113 27.7028 37.336 27.9454 37.896C28.1601 37.3547 28.5148 36.9347 29.0094 36.636C29.5041 36.3373 30.0548 36.188 30.6614 36.188ZM42.8593 39.87C42.8593 40.1127 42.8453 40.3693 42.8173 40.64H36.6853C36.7319 41.396 36.9886 41.9887 37.4553 42.418C37.9313 42.838 38.5053 43.048 39.1773 43.048C39.7279 43.048 40.1853 42.922 40.5493 42.67C40.9226 42.4087 41.1839 42.0633 41.3333 41.634H42.7053C42.4999 42.3713 42.0893 42.9733 41.4733 43.44C40.8573 43.8973 40.0919 44.126 39.1773 44.126C38.4493 44.126 37.7959 43.9627 37.2173 43.636C36.6479 43.3093 36.1999 42.8473 35.8733 42.25C35.5466 41.6433 35.3833 40.9433 35.3833 40.15C35.3833 39.3567 35.5419 38.6613 35.8593 38.064C36.1766 37.4667 36.6199 37.0093 37.1893 36.692C37.7679 36.3653 38.4306 36.202 39.1773 36.202C39.9053 36.202 40.5493 36.3607 41.1093 36.678C41.6693 36.9953 42.0986 37.434 42.3973 37.994C42.7053 38.5447 42.8593 39.17 42.8593 39.87ZM41.5433 39.604C41.5433 39.1187 41.4359 38.7033 41.2213 38.358C41.0066 38.0033 40.7126 37.7373 40.3393 37.56C39.9753 37.3733 39.5693 37.28 39.1213 37.28C38.4773 37.28 37.9266 37.4853 37.4693 37.896C37.0213 38.3067 36.7646 38.876 36.6993 39.604H41.5433ZM47.2569 44.126C46.6689 44.126 46.1416 44.028 45.6749 43.832C45.2082 43.6267 44.8396 43.3467 44.5689 42.992C44.2982 42.628 44.1489 42.2127 44.1209 41.746H45.4369C45.4742 42.1287 45.6516 42.4413 45.9689 42.684C46.2956 42.9267 46.7202 43.048 47.2429 43.048C47.7282 43.048 48.1109 42.9407 48.3909 42.726C48.6709 42.5113 48.8109 42.2407 48.8109 41.914C48.8109 41.578 48.6616 41.3307 48.3629 41.172C48.0642 41.004 47.6022 40.8407 46.9769 40.682C46.4076 40.5327 45.9409 40.3833 45.5769 40.234C45.2222 40.0753 44.9142 39.8467 44.6529 39.548C44.4009 39.24 44.2749 38.8387 44.2749 38.344C44.2749 37.952 44.3916 37.5927 44.6249 37.266C44.8582 36.9393 45.1896 36.6827 45.6189 36.496C46.0482 36.3 46.5382 36.202 47.0889 36.202C47.9382 36.202 48.6242 36.4167 49.1469 36.846C49.6696 37.2753 49.9496 37.8633 49.9869 38.61H48.7129C48.6849 38.2087 48.5216 37.8867 48.2229 37.644C47.9336 37.4013 47.5416 37.28 47.0469 37.28C46.5896 37.28 46.2256 37.378 45.9549 37.574C45.6842 37.77 45.5489 38.0267 45.5489 38.344C45.5489 38.596 45.6282 38.806 45.7869 38.974C45.9549 39.1327 46.1602 39.2633 46.4029 39.366C46.6549 39.4593 47.0002 39.5667 47.4389 39.688C47.9896 39.8373 48.4376 39.9867 48.7829 40.136C49.1282 40.276 49.4222 40.4907 49.6649 40.78C49.9169 41.0693 50.0476 41.4473 50.0569 41.914C50.0569 42.334 49.9402 42.712 49.7069 43.048C49.4736 43.384 49.1422 43.65 48.7129 43.846C48.2929 44.0327 47.8076 44.126 47.2569 44.126Z" />
      <path
        d="M33.6757 2.51545V2.61545H33.7757H34.8521C36.2729 2.61545 37.4433 3.87922 37.4433 5.45127V11.2278L35.8492 13.1501V9.75715V9.65715H35.7492H16.3727H16.2727V9.75715V22.6748C16.2727 23.2612 16.7119 23.7534 17.2698 23.7534H26.0011L27.6933 25.5106H17.2698C15.849 25.5106 14.6786 24.2468 14.6786 22.6748V5.45127C14.6786 3.87922 15.849 2.61545 17.2698 2.61545H18.3463H18.4463V2.51545V0.658228H20.0404V2.51545V2.61545H20.1404H31.9815H32.0815V2.51545V0.658228H33.6757V2.51545ZM16.2727 7.79993V7.89993H16.3727H35.7492H35.8492V7.79993V5.45127C35.8492 4.86484 35.41 4.37266 34.8521 4.37266H33.7757H33.6757V4.47266V6.32988H32.0815V4.47266V4.37266H31.9815H20.1404H20.0404V4.47266V6.32988H18.4463V4.47266V4.37266H18.3463H17.2698C16.7119 4.37266 16.2727 4.86484 16.2727 5.45127V7.79993ZM26.0678 20.8322L27.1728 19.5658L30.3428 22.8577L30.4207 22.9386L30.492 22.8519L36.211 15.9056L37.4024 17.0728L30.5097 25.4447L26.0678 20.8322ZM30.4462 13.6694H28.8521V11.9122H30.4462V13.6694ZM34.0345 11.9122V13.6694H32.4404V11.9122H34.0345ZM19.6816 17.5839H18.0874V15.8267H19.6816V17.5839ZM23.2698 17.5839H21.6757V15.8267H23.2698V17.5839ZM25.2639 15.8267H26.858V17.5839H25.2639V15.8267ZM28.8521 15.8267H30.4462V17.5839H28.8521V15.8267ZM18.0874 19.7411H19.6816V21.4983H18.0874V19.7411ZM21.6757 19.7411H23.2698V21.4983H21.6757V19.7411ZM19.6816 13.6694H18.0874V11.9122H19.6816V13.6694ZM23.2698 13.6694H21.6757V11.9122H23.2698V13.6694ZM26.858 13.6694H25.2639V11.9122H26.858V13.6694Z"
        // stroke="#1F1B1B"
        stroke-width="0.2"
      />
    </svg>
  );
};

export default GameIcon;
