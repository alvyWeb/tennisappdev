import "./singlehstory.scss";

import styles from "@/styles/pages/Home.module.scss";
export default function Home() {
  const gameStory = {
    "court": [
      {
        "headTitle": "Yarkon Park, Tel Aviv | Court #1",
        "dateTime": "14:00 | 24/02/2023",
        "precipitation": "Precipitation",
        "percentage": "25%",
        "court": "Court",
        "grass": "Grass",
        "weather": "Weather",
        "cloudy": "Cloudy"
      }
    ],
    "gameFeature": [
      {
        "points": "+3 Points",
        "headTitle": "Players and results",
        "myImg": "../user-Image/Tafsir.png",
        "myCountryImg": "../flags/ag.png",
        "myName": "Mandler T.",
        "myRank": "(PRO)",
        "opTeaMatePlayerImg": "../user-Image/Tafsir.png",
        "opTeaMateCountryImg": "../flags/ag.png",
        "opTeaMatePlayerName": "Peen N",
        "opTeaMatePlayerRank": "(panther)",
        "match": "2",
        "matchScore": "1.62",
        "sMatch": "1",
        "sMatchScore": "1.62",
        "playerMatch":"1 - 3"
      }
    ],
    "matchDetails": [
      {
        "score1": "5",
        "score2": "4",
        "score3": "3",
        "score4": "2",
        "score5": "1",
        "scores": "s",
        "myDetails":"Noam Pan and Shai Goren",
        "sScore1": "1",
        "sScore2": "1",
        "sScore3": "1",
        "sScore4": "6",
        "rootOver": "7",
        "sScore5": "2",
        "sScores": "3",
        "tScore1": "0",
        "tScore2": "0",
        "tScore3": "0",
        "tScore4": "7",
        "tRooOver": "9",
        "tScore5": "1",
        "tScore6": "1",
        "opTeaMateDetails":"Yaron Oz and Tomer Mandler"
      },
    ],
    "buttons": [
      {
        "result": "Fill results",
        "chat": "Chat",
        "bet": "Bet",
      },
    ],
  };
  return (
    <main className={styles.homepage}>
      <div className="gamestory_container">
        <div className="headimage_content">
          <img src="../Stock/futuregamestory/image/Subtract.jpg" />
          <div className="content">
            <div className="menu_go">
              <svg
                width="6"
                height="28"
                viewBox="0 0 6 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="2.96093" cy="2.96093" r="2.96093" fill="white" />
                <circle cx="2.96093" cy="13.8572" r="2.96093" fill="white" />
                <circle cx="2.96093" cy="24.7532" r="2.96093" fill="white" />
              </svg>
              <svg
                width="14"
                height="24"
                viewBox="0 0 14 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.9423 12.7148L12.8432 12.6184L12.9423 12.7148C13.1285 12.5235 13.2326 12.267 13.2326 12.0001C13.2326 11.7331 13.1285 11.4766 12.9423 11.2853L12.8432 11.3817L12.9423 11.2853L2.44342 0.494775C2.44323 0.494573 2.44304 0.494372 2.44285 0.49417C2.3495 0.396308 2.2377 0.317886 2.1139 0.263426C1.98984 0.208853 1.85619 0.179426 1.72068 0.176846C1.58518 0.174266 1.4505 0.198585 1.32446 0.248396C1.19841 0.298206 1.0835 0.37252 0.986364 0.467035C0.889229 0.56155 0.811801 0.67439 0.758562 0.799027C0.705324 0.923663 0.677333 1.05762 0.676207 1.19315C0.675081 1.32867 0.700844 1.46307 0.752004 1.58858C0.803059 1.71382 0.878397 1.82773 0.973672 1.92372C0.973867 1.92392 0.974062 1.92411 0.974257 1.92431L10.7787 12.0001L0.974257 22.0758C0.974056 22.076 0.973855 22.0762 0.973654 22.0764C0.878387 22.1724 0.803056 22.2863 0.752004 22.4115C0.700844 22.537 0.675081 22.6714 0.676207 22.807C0.677333 22.9425 0.705324 23.0764 0.758562 23.2011C0.811801 23.3257 0.889228 23.4386 0.986364 23.5331C1.0835 23.6276 1.19841 23.7019 1.32446 23.7517C1.45051 23.8015 1.58518 23.8258 1.72068 23.8233C1.85619 23.8207 1.98984 23.7913 2.1139 23.7367C2.23771 23.6822 2.34953 23.6038 2.44289 23.5059C2.44307 23.5057 2.44325 23.5055 2.44342 23.5053L12.9423 12.7148Z"
                  fill="white"
                  stroke="white"
                  stroke-width="0.3"
                />
              </svg>
            </div>
            <img src="../svg/Futuregame.svg" alt="" />
          </div>
        </div>
        <div className="gamestory_body">
          {
            gameStory.court.map((item) => (
              <div className="head_body">
                <div className="head">
                  <p>{item.headTitle}</p>
                  <div className="time_date">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="13"
                        cy="13"
                        r="12.75"
                        fill="white"
                        stroke="#210C0C"
                        stroke-width="0.5"
                      />
                      <path
                        d="M6.0055 13.6129H4.47621L4.38401 12.4461H3.17521L2.71131 13.6129H2.07764L4.00498 8.95374H5.55476L6.0055 13.6129ZM3.3918 11.9103H4.33865L4.18791 9.91516L3.3918 11.9103Z"
                        fill="black"
                      />
                      <path
                        d="M10.115 9.51087H9.06277L8.28569 13.6129H6.87493L7.65202 9.51087H6.61298L6.73005 8.95374H10.2262L10.115 9.51087Z"
                        fill="black"
                      />
                      <path
                        d="M11.6762 11.603C11.8068 11.603 11.9166 11.5418 12.0055 11.4189C12.0951 11.2965 12.1694 11.1473 12.228 10.9719C12.2872 10.7956 12.3297 10.612 12.3553 10.4213C12.3816 10.2307 12.3948 10.0643 12.3948 9.92173C12.3948 9.79026 12.375 9.67932 12.3362 9.58811C12.2971 9.49731 12.2122 9.4517 12.0816 9.4517H11.7875L11.3762 11.603H11.6762ZM11.284 12.0714L10.9899 13.6129H9.57913L10.4616 8.95374H11.9704C12.2192 8.95374 12.4453 8.96853 12.6494 8.99811C12.8543 9.02687 13.0306 9.08521 13.1792 9.17396C13.3274 9.26188 13.443 9.38761 13.526 9.55195C13.6087 9.71548 13.6504 9.93406 13.6504 10.2077C13.6504 10.462 13.6142 10.7032 13.5421 10.9308C13.4697 11.1588 13.3541 11.3573 13.1953 11.5258C13.0361 11.6946 12.8302 11.8277 12.5777 11.9251C12.3249 12.0229 12.018 12.0714 11.6572 12.0714H11.284Z"
                        fill="black"
                      />
                      <path
                        d="M14.7409 12.1387C14.7241 12.2463 14.7124 12.3486 14.7058 12.446C14.6988 12.5438 14.6955 12.6317 14.6955 12.7106C14.6955 12.7546 14.6974 12.8035 14.7014 12.8569C14.7061 12.9107 14.716 12.9612 14.7306 13.0081C14.746 13.0541 14.768 13.0931 14.7965 13.1248C14.8247 13.1568 14.8653 13.1724 14.918 13.1724C14.9567 13.1724 15.0014 13.1584 15.0511 13.1297C15.1016 13.1001 15.1521 13.0586 15.2019 13.0048C15.2516 12.9501 15.2992 12.884 15.3453 12.8059C15.391 12.727 15.4272 12.6391 15.4536 12.5413H16.5248L16.3551 13.3269C16.268 13.3906 16.1681 13.4444 16.0551 13.488C15.9416 13.5319 15.8216 13.5677 15.695 13.5948C15.5692 13.6211 15.4408 13.64 15.3102 13.6523C15.1792 13.6655 15.0548 13.672 14.937 13.672C14.7193 13.672 14.517 13.6498 14.3297 13.6063C14.1423 13.5615 13.9788 13.4855 13.8394 13.3779C13.6997 13.2706 13.5895 13.1276 13.5087 12.9489C13.4286 12.7706 13.3887 12.5491 13.3887 12.2849C13.3887 12.045 13.4223 11.81 13.4896 11.5799C13.5577 11.3498 13.6711 11.1456 13.8292 10.9669C13.9879 10.7886 14.2016 10.6456 14.4702 10.538C14.7383 10.4307 15.0724 10.3769 15.4726 10.3769C15.9087 10.3769 16.2365 10.4533 16.456 10.6053C16.6763 10.7565 16.7868 10.9932 16.7868 11.3153C16.7868 11.448 16.7692 11.5914 16.7341 11.7459C16.699 11.8996 16.6466 12.0302 16.5775 12.1387H14.7409ZM15.6102 11.2644C15.6102 11.1132 15.5882 11.0109 15.5443 10.957C15.5011 10.9036 15.4492 10.8765 15.3877 10.8765C15.3182 10.8765 15.2538 10.9024 15.1946 10.9537C15.136 11.0043 15.0826 11.0729 15.035 11.1592C14.9871 11.2446 14.9436 11.3428 14.9048 11.4534C14.8656 11.5631 14.8331 11.6785 14.8067 11.8001H15.5516C15.5604 11.7422 15.5692 11.6814 15.578 11.6177C15.5868 11.5631 15.5941 11.5039 15.5999 11.4402C15.6065 11.3769 15.6102 11.3182 15.6102 11.2644Z"
                        fill="black"
                      />
                      <path
                        d="M18.4599 10.9275C18.5507 10.8301 18.6524 10.7397 18.7658 10.6563C18.866 10.5873 18.9838 10.524 19.1185 10.4656C19.2538 10.4065 19.4046 10.3769 19.5707 10.3769C19.7968 10.3769 19.9837 10.4422 20.1312 10.5725C20.2793 10.7019 20.3536 10.879 20.3536 11.1033C20.3536 11.167 20.347 11.2442 20.3346 11.335C20.3218 11.425 20.3068 11.5191 20.2892 11.6177C20.2717 11.7155 20.253 11.8145 20.2336 11.9152C20.2139 12.015 20.1974 12.1038 20.1839 12.1814L19.9102 13.6129H18.5829L18.9429 11.6982C18.9516 11.635 18.9622 11.57 18.9751 11.5043C18.9886 11.4377 18.9955 11.3773 18.9955 11.3235C18.9955 11.2504 18.9787 11.1904 18.9458 11.1444C18.9136 11.0975 18.8646 11.0737 18.7994 11.0737C18.7204 11.0737 18.6447 11.1058 18.5726 11.169C18.5013 11.2327 18.446 11.2865 18.4072 11.3301L17.9755 13.6129H16.6423L17.238 10.4574H18.3019L18.4204 10.9275H18.4599Z"
                        fill="black"
                      />
                      <path
                        d="M22.1064 10.9275C22.1971 10.8301 22.2988 10.7397 22.4123 10.6563C22.5125 10.5873 22.6303 10.524 22.765 10.4656C22.9003 10.4065 23.0511 10.3769 23.2172 10.3769C23.4433 10.3769 23.6302 10.4422 23.7777 10.5725C23.9258 10.7019 24.0001 10.879 24.0001 11.1033C24.0001 11.167 23.9935 11.2442 23.9811 11.335C23.9683 11.425 23.9533 11.5191 23.9357 11.6177C23.9181 11.7155 23.8995 11.8145 23.8801 11.9152C23.8603 12.015 23.8439 12.1038 23.8303 12.1814L23.5567 13.6129H22.2293L22.5893 11.6982C22.5981 11.635 22.6087 11.57 22.6215 11.5043C22.6351 11.4377 22.642 11.3773 22.642 11.3235C22.642 11.2504 22.6252 11.1904 22.5923 11.1444C22.5601 11.0975 22.511 11.0737 22.4459 11.0737C22.3669 11.0737 22.2912 11.1058 22.2191 11.169C22.1478 11.2327 22.0925 11.2865 22.0537 11.3301L21.622 13.6129H20.2888L20.8844 10.4574H21.9484L22.0669 10.9275H22.1064Z"
                        fill="black"
                      />
                      <path
                        d="M14.7357 16.0733C14.7196 16.3839 14.6219 16.6029 14.4324 16.7673C14.3347 16.8527 14.1994 16.8954 14.0311 16.8954C14.015 16.8954 13.9985 16.8954 13.9824 16.8954C13.966 16.8954 13.9444 16.8954 13.9283 16.8893C13.8792 16.9378 13.8522 16.9867 13.8522 17.0413C13.8522 17.1144 13.9063 17.1572 13.9879 17.1814C14.0691 17.2118 14.1668 17.2303 14.2696 17.2484C14.443 17.2726 14.6274 17.3215 14.7793 17.437C14.9256 17.5528 15.0288 17.7295 15.0288 18.0216C15.0288 18.3442 14.904 18.5631 14.7306 18.6913C14.5517 18.8191 14.3132 18.8738 14.0907 18.8738C13.8306 18.8676 13.6085 18.8253 13.4567 18.7275C13.2994 18.6301 13.2126 18.4719 13.2126 18.2287C13.2126 18.1128 13.2668 18.0155 13.348 17.93C13.4296 17.845 13.5379 17.778 13.6407 17.7233C13.4618 17.6683 13.3103 17.5405 13.3103 17.2788C13.3103 17.1814 13.359 17.084 13.4241 16.9928C13.4892 16.9012 13.5705 16.8285 13.6517 16.7796C13.4944 16.6641 13.4186 16.4813 13.3806 16.3293C13.359 16.2376 13.3429 16.1464 13.3374 16.0552V15.148C13.359 14.8378 13.4457 14.6123 13.6356 14.436C13.7278 14.3444 13.8631 14.3021 14.0311 14.3021C14.3077 14.3021 14.4756 14.4418 14.5788 14.6061C14.6164 14.5638 14.6816 14.4907 14.7683 14.4237C14.8499 14.3567 14.9417 14.3021 15.0288 14.3021V14.8497C14.8821 14.8497 14.7738 14.8802 14.7086 14.9229C14.7141 14.9533 14.7196 14.9837 14.7251 15.0022C14.7251 15.0264 14.7251 15.0507 14.7306 15.0691C14.7357 15.0872 14.7357 15.1115 14.7357 15.13V16.0733ZM14.1994 15.1723C14.1994 15.0568 14.1774 14.9837 14.1342 14.9167C14.1123 14.8863 14.0801 14.8682 14.0311 14.8682C13.9444 14.8682 13.9012 14.9471 13.8847 15.0203C13.8741 15.063 13.8686 15.1176 13.8741 15.1723V16.0856C13.8686 16.2015 13.8847 16.2742 13.9338 16.335C13.9553 16.3658 13.9879 16.3839 14.0311 16.3839C14.1233 16.3839 14.1613 16.3108 14.1829 16.2376C14.1939 16.1953 14.1994 16.1403 14.1994 16.0856V15.1723ZM13.9444 17.8326C13.8306 17.9058 13.7439 17.997 13.7439 18.1252C13.7439 18.2529 13.8467 18.3565 14.1017 18.3565C14.1939 18.3565 14.2967 18.338 14.3783 18.3014C14.4595 18.2649 14.5191 18.2102 14.5191 18.1309C14.5191 18.0763 14.5136 18.0335 14.4756 17.9912C14.4324 17.9485 14.3618 17.9181 14.2264 17.8938L13.9444 17.8326Z"
                        fill="black"
                      />
                      <path
                        d="M16.7525 14.9837C16.7035 14.9656 16.6493 14.9594 16.6007 14.9594C16.5139 14.9594 16.4108 14.9714 16.3241 15.063C16.2213 15.1604 16.2048 15.2639 16.2048 15.3674V17.6806H15.6575V14.3505H16.2048V14.722C16.2103 14.6792 16.2483 14.5757 16.335 14.4783C16.4218 14.3871 16.5516 14.3021 16.7525 14.3021V14.9837Z"
                        fill="black"
                      />
                      <path
                        d="M18.7528 16.8708C18.7363 17.1937 18.6496 17.4189 18.4601 17.5956C18.3624 17.6868 18.2271 17.7295 18.0482 17.7295C17.6958 17.7295 17.5221 17.5101 17.4353 17.2911C17.3867 17.1633 17.3541 17.0171 17.3486 16.8527V15.1784C17.3651 14.8559 17.4518 14.6184 17.6413 14.436C17.7335 14.3444 17.8693 14.3021 18.0482 14.3021C18.4005 14.3021 18.5794 14.5211 18.6661 14.7343C18.7148 14.8621 18.7473 15.0022 18.7528 15.1604V16.8708ZM18.2377 15.1784C18.2432 15.0507 18.2216 14.9594 18.1674 14.8863C18.1404 14.8559 18.0968 14.8378 18.0482 14.8378C17.945 14.8378 17.9018 14.9167 17.8799 15.0079C17.8638 15.0568 17.8583 15.1115 17.8638 15.1784V16.8527C17.8583 16.9805 17.8853 17.0717 17.9344 17.1387C17.9614 17.1691 17.9991 17.1876 18.0482 17.1876C18.151 17.1876 18.2 17.1144 18.2216 17.0232C18.2377 16.9743 18.2432 16.9197 18.2377 16.8527V15.1784Z"
                        fill="black"
                      />
                      <path
                        d="M20.3894 14.3505H20.9371V17.6805H20.3894V17.4003C20.3785 17.4065 20.3569 17.4311 20.3298 17.4615C20.2647 17.5343 20.1889 17.6197 20.0913 17.6805C20.0426 17.7109 19.9936 17.7294 19.9449 17.7294C19.7986 17.7294 19.6958 17.6316 19.6306 17.5039C19.5655 17.3822 19.533 17.2179 19.533 17.0778V14.3505H20.0807V16.9866C20.0807 17.1144 20.1454 17.1324 20.2105 17.1324C20.2702 17.1324 20.3027 17.0963 20.3408 17.0535C20.3569 17.0351 20.3733 17.0047 20.3894 16.9742V14.3505Z"
                        fill="black"
                      />
                      <path
                        d="M21.7771 14.3505H22.3244V14.5699C22.4166 14.4726 22.4978 14.3994 22.6065 14.3444C22.6552 14.314 22.7093 14.3021 22.7583 14.3021C22.9098 14.3021 23.013 14.3994 23.0836 14.5211C23.1483 14.6488 23.1809 14.8132 23.1809 14.9533V17.0779C23.1809 17.218 23.1483 17.3823 23.0836 17.5039C23.013 17.6317 22.9098 17.7295 22.7583 17.7295C22.6552 17.7295 22.5469 17.6625 22.4653 17.5956C22.4166 17.5528 22.3735 17.5101 22.3244 17.4616V18.8253H21.7771V14.3505ZM22.3244 16.9501C22.3244 17.0475 22.4056 17.151 22.4872 17.151C22.5685 17.151 22.6336 17.0655 22.6336 16.9501V15.0811C22.6336 14.9656 22.5685 14.8802 22.4872 14.8802C22.4056 14.8802 22.3244 14.9656 22.3244 15.0811V16.9501Z"
                        fill="black"
                      />
                    </svg>

                    <p>{item.dateTime}</p>
                  </div>
                </div>
                <div className="body">
                  <div className="body_content">
                    <p>{item.precipitation}</p>
                    <p>{item.percentage}</p>
                  </div>
                  <div className="body_content _border">
                    <p>{item.court}</p>
                    <p>{item.grass}</p>
                  </div>
                  <div className="body_content">
                    <p>{item.weather}</p>
                    <p>{item.cloudy}</p>
                  </div>
                </div>
              </div>
            ))}
          {
            gameStory.gameFeature.map((item) => (
              <div className="feature_body">
                <div className="head_content">
                  <div className="content">
                    <p>{item.points}</p>
                    <p>{item.headTitle}</p>
                  </div>
                </div>
                <div className="body_content">
                  <div className="my_team">
                    <div className="_me">
                      <span className="player_profile">
                        <img src={item.myImg} />
                        <img src={item.myCountryImg} />
                      </span>
                      <p className="name_text">{item.myName}</p>
                      <p className="rancking_text">{item.myRank}</p>
                    </div>
                  </div>
                  <div className="score_details">
                    <p>{item.playerMatch}</p>
                  </div>
                  <div className="my_team">
                    <div className="_teamate">
                      <span className="player_profile">
                        <img src={item.opTeaMatePlayerImg} />
                        <img src={item.opTeaMateCountryImg} />
                      </span>
                      <p className="name_text">{item.opTeaMatePlayerName}</p>
                      <p className="rancking_text">{item.opTeaMatePlayerRank}</p>
                    </div>
                  </div>
                </div>
                <div className="bottom_content">
                  <div className="_content">
                    <p>{item.match}</p>
                    <p>{item.matchScore}</p>
                  </div>
                  <div className="_content">
                    <p>{item.sMatch}</p>
                    <p>{item.sMatchScore}</p>
                  </div>
                </div>
              </div>
            ))}
          {
            gameStory.matchDetails.map((item) => (
              <div className="body_bottom">
                <div className="bottom_head">
                  <p>{item.score1}</p>
                  <p>{item.score2}</p>
                  <p>{item.score3}</p>
                  <p>{item.score4}</p>
                  <p>{item.score5}</p>
                  <p>{item.scores}</p>
                </div>
                <div className="bottom_s_body">
                  <div className="item">
                    <p>{item.sScore1}</p>
                    <p>{item.sScore2}</p>
                    <p>{item.sScore3}</p>
                    <span>
                      <p>{item.sScore4}</p>
                      <p>{item.rootOver}</p>
                    </span>
                    <p>{item.sScore5}</p>
                    <p>{item.sScores}</p>
                  </div>
                  <span>
                    <p>{item.myDetails}</p>
                  </span>
                </div>
                <div className="bottom_s_body">
                  <div className="item">
                    <p>{item.tScore1}</p>
                    <p>{item.tScore2}</p>
                    <p>{item.tScore3}</p>
                    <span>
                      <p>{item.tScore4}</p>
                      <p>{item.tRooOver}</p>
                    </span>
                    <p>{item.tScore5}</p>
                    <p>{item.tScore6}</p>
                  </div>
                  <span>
                    <p>{item.opTeaMateDetails}</p>
                  </span>
                </div>
              </div>
            ))}

          {
            gameStory.buttons.map((item) => (
              <div className="all_button">
                <a href="">
                    <button>
                      {item.chat}
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.5 16C9.98336 16 11.4334 15.5601 12.6668 14.736C13.9001 13.9119 14.8614 12.7406 15.4291 11.3701C15.9967 9.99968 16.1453 8.49168 15.8559 7.03682C15.5665 5.58197 14.8522 4.2456 13.8033 3.1967C12.7544 2.14781 11.418 1.4335 9.96317 1.14411C8.50832 0.854725 7.00032 1.00325 5.62987 1.57091C4.25943 2.13856 3.08809 3.09986 2.26398 4.33323C1.43987 5.56659 1 7.01664 1 8.5C1 9.74 1.3 10.9083 1.83333 11.9392L1 16L5.06083 15.1667C6.09083 15.6992 7.26083 16 8.5 16Z"
                          stroke="white"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </a>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}
