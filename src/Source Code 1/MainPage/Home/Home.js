import React from 'react';
import './Home.scss';
import UiUx from '../../Image/HomepageImg/UIUX.png';
import HomeImg from '../../Image/HomepageImg/Jaberson.png';

export default function Home() {
  return (
    <div className="mainHome">
      <div className="container-fluid" id="leftRightPadding">
        <div className="row" id="HomeRow">
          <div className="col-sm-12 col-md-6">
            <div className="introductions ">
              <div className="socialMediaIcons" id="socialMediaIcons">
                <div>
                  <a
                    href="https://m.facebook.com/jaberson.sha.3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {' '}
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#1c1c1c"
                        d="M18.83 9.44C18.7383 9.30429 18.6146 9.19319 18.4699 9.11647C18.3252 9.03975 18.1638 8.99975 18 9H15V7H17.2C17.4652 7 17.7196 6.89464 17.9071 6.70711C18.0946 6.51957 18.2 6.26522 18.2 6V2C18.2 1.73478 18.0946 1.48043 17.9071 1.29289C17.7196 1.10536 17.4652 1 17.2 1H14C12.4617 1 10.9865 1.61107 9.89878 2.69878C8.81107 3.78649 8.2 5.26174 8.2 6.8V9H6C5.73478 9 5.48043 9.10536 5.29289 9.29289C5.10536 9.48043 5 9.73478 5 10V14C5 14.2652 5.10536 14.5196 5.29289 14.7071C5.48043 14.8946 5.73478 15 6 15H8.2V22C8.2 22.2652 8.30536 22.5196 8.49289 22.7071C8.68043 22.8946 8.93478 23 9.2 23H14C14.2652 23 14.5196 22.8946 14.7071 22.7071C14.8946 22.5196 15 22.2652 15 22V15H16.4C16.6003 15.0002 16.796 14.9402 16.9618 14.8279C17.1276 14.7156 17.2559 14.5561 17.33 14.37L18.93 10.37C18.9904 10.2186 19.0129 10.0547 18.9954 9.89259C18.978 9.7305 18.9212 9.57512 18.83 9.44ZM15.72 13H14C13.7348 13 13.4804 13.1054 13.2929 13.2929C13.1054 13.4804 13 13.7348 13 14V21H10.2V14C10.2 13.7348 10.0946 13.4804 9.90711 13.2929C9.71957 13.1054 9.46522 13 9.2 13H7V11H9.2C9.46522 11 9.71957 10.8946 9.90711 10.7071C10.0946 10.5196 10.2 10.2652 10.2 10V6.8C10.2026 5.79299 10.6038 4.82798 11.3159 4.11591C12.028 3.40384 12.993 3.00264 14 3H16.2V5H15.4C15.0614 4.95067 14.7163 4.97137 14.3861 5.06082C14.0558 5.15026 13.7474 5.30655 13.48 5.52C13.3177 5.6899 13.1915 5.8909 13.109 6.11089C13.0265 6.33087 12.9894 6.56529 13 6.8V10C13 10.2652 13.1054 10.5196 13.2929 10.7071C13.4804 10.8946 13.7348 11 14 11H16.52L15.72 13Z"
                      />
                    </svg>
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.instagram.com/jdesigns2930/?igshid=YmMyMTA2M2Y%3D"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#1c1c1c"
                        d="M12 7C11.0111 7 10.0444 7.29324 9.22215 7.84265C8.3999 8.39206 7.75904 9.17295 7.3806 10.0866C7.00216 11.0002 6.90315 12.0055 7.09607 12.9755C7.289 13.9454 7.7652 14.8363 8.46447 15.5355C9.16373 16.2348 10.0546 16.711 11.0245 16.9039C11.9945 17.0969 12.9998 16.9978 13.9134 16.6194C14.827 16.241 15.6079 15.6001 16.1573 14.7779C16.7068 13.9556 17 12.9889 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM12 15C11.4067 15 10.8266 14.8241 10.3333 14.4944C9.83994 14.1648 9.45542 13.6962 9.22836 13.1481C9.0013 12.5999 8.94189 11.9967 9.05764 11.4147C9.1734 10.8328 9.45912 10.2982 9.87868 9.87868C10.2982 9.45912 10.8328 9.1734 11.4147 9.05764C11.9967 8.94189 12.5999 9.0013 13.1481 9.22836C13.6962 9.45542 14.1648 9.83994 14.4944 10.3333C14.8241 10.8266 15 11.4067 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15ZM17 6C16.8022 6 16.6089 6.05865 16.4444 6.16853C16.28 6.27841 16.1518 6.43459 16.0761 6.61732C16.0004 6.80004 15.9806 7.00111 16.0192 7.19509C16.0578 7.38907 16.153 7.56725 16.2929 7.70711C16.4327 7.84696 16.6109 7.9422 16.8049 7.98079C16.9989 8.01937 17.2 7.99957 17.3827 7.92388C17.5654 7.84819 17.7216 7.72002 17.8315 7.55557C17.9414 7.39112 18 7.19778 18 7C18 6.73478 17.8946 6.48043 17.7071 6.29289C17.5196 6.10536 17.2652 6 17 6ZM21.94 8.24C21.9234 7.38542 21.7611 6.53995 21.46 5.74C21.1808 5.01207 20.7516 4.35099 20.2003 3.7997C19.649 3.2484 18.9879 2.81922 18.26 2.54C17.4601 2.2389 16.6146 2.07657 15.76 2.06C14.79 2 14.47 2 12 2C9.53 2 9.21 2 8.24 2.06C7.38542 2.07657 6.53995 2.2389 5.74 2.54C5.01207 2.81922 4.35099 3.2484 3.7997 3.7997C3.2484 4.35099 2.81922 5.01207 2.54 5.74C2.2389 6.53995 2.07657 7.38542 2.06 8.24C2 9.22 2 9.54 2 12C2 14.46 2 14.78 2.06 15.76C2.07657 16.6146 2.2389 17.4601 2.54 18.26C2.81922 18.9879 3.2484 19.649 3.7997 20.2003C4.35099 20.7516 5.01207 21.1808 5.74 21.46C6.53995 21.7611 7.38542 21.9234 8.24 21.94C9.24 21.94 9.53 22 12 22C14.47 22 14.79 22 15.76 21.94C16.6146 21.9234 17.4601 21.7611 18.26 21.46C18.9879 21.1808 19.649 20.7516 20.2003 20.2003C20.7516 19.649 21.1808 18.9879 21.46 18.26C21.7611 17.4601 21.9234 16.6146 21.94 15.76C21.94 14.76 22 14.46 22 12C22 9.54 22 9.22 21.94 8.24ZM19.94 15.67C19.9225 16.3046 19.8043 16.9324 19.59 17.53C19.4128 18.0023 19.1327 18.4293 18.77 18.78C18.4214 19.1428 17.9936 19.4201 17.52 19.59C16.921 19.8131 16.289 19.9348 15.65 19.95C14.71 19.95 14.42 20 11.99 20C9.56 20 9.28 20 8.34 20C7.70202 19.9835 7.07075 19.8654 6.47 19.65C5.99766 19.4728 5.57067 19.1927 5.22 18.83C4.85715 18.4814 4.57992 18.0536 4.41 17.58C4.1878 16.9842 4.06615 16.3557 4.05 15.72C4.05 14.72 4.05 14.47 4.05 12.05C4.05 9.63 4.05 9.34 4.05 8.38C4.06724 7.74121 4.18884 7.10954 4.41 6.51C4.58256 6.04063 4.85953 5.61662 5.22 5.27C5.56858 4.90715 5.99641 4.62992 6.47 4.46C7.06899 4.2369 7.70099 4.11523 8.34 4.1C9.28 4 9.57 4 12 4C14.43 4 14.72 4 15.66 4C16.3021 4.01633 16.9373 4.13794 17.54 4.36C18.0094 4.53256 18.4334 4.80953 18.78 5.17C19.1428 5.51858 19.4201 5.94641 19.59 6.42C19.8348 7.02856 19.9735 7.67458 20 8.33C20 9.33 20.05 9.58 20.05 12C20.05 14.42 20 14.71 20 15.67H19.94Z"
                      />
                    </svg>
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/jaberson-j-3b4557237"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#1c1c1c"
                        d="M17.5 8.99903C16.6047 8.99865 15.7233 9.22009 14.9345 9.64356C14.8626 9.45399 14.7346 9.2908 14.5677 9.17567C14.4008 9.06055 14.2027 8.99894 14 8.99903H9.99997C9.86863 8.99896 9.73856 9.02477 9.6172 9.075C9.49584 9.12523 9.38557 9.19888 9.2927 9.29176C9.19982 9.38463 9.12617 9.4949 9.07594 9.61626C9.02571 9.73762 8.9999 9.86769 8.99997 9.99903V21.999C8.99989 22.1304 9.02571 22.2604 9.07594 22.3818C9.12616 22.5032 9.19982 22.6134 9.29269 22.7063C9.38557 22.7992 9.49584 22.8728 9.6172 22.9231C9.73856 22.9733 9.86863 22.9991 9.99997 22.999H14C14.1313 22.9991 14.2614 22.9733 14.3827 22.9231C14.5041 22.8728 14.6144 22.7992 14.7072 22.7063C14.8001 22.6134 14.8738 22.5032 14.924 22.3818C14.9742 22.2604 15 22.1304 15 21.999V16.499C15 16.2338 15.1053 15.9795 15.2929 15.7919C15.4804 15.6044 15.7348 15.499 16 15.499C16.2652 15.499 16.5195 15.6044 16.7071 15.7919C16.8946 15.9795 17 16.2338 17 16.499V21.999C16.9999 22.1304 17.0257 22.2604 17.0759 22.3818C17.1262 22.5032 17.1998 22.6134 17.2927 22.7063C17.3856 22.7992 17.4958 22.8728 17.6172 22.9231C17.7386 22.9733 17.8686 22.9991 18 22.999H22C22.1313 22.9991 22.2614 22.9733 22.3827 22.9231C22.5041 22.8728 22.6144 22.7992 22.7072 22.7063C22.8001 22.6134 22.8738 22.5032 22.924 22.3818C22.9742 22.2604 23 22.1304 23 21.999V14.499C22.9982 13.0409 22.4181 11.643 21.3871 10.6119C20.356 9.58089 18.9581 9.00084 17.5 8.99903ZM21 20.999H19V16.499C19 15.7034 18.6839 14.9403 18.1213 14.3777C17.5587 13.8151 16.7956 13.499 16 13.499C15.2043 13.499 14.4413 13.8151 13.8786 14.3777C13.316 14.9403 13 15.7034 13 16.499V20.999H11V10.999H13V11.7022C13.0001 11.9094 13.0645 12.1114 13.1844 12.2804C13.3043 12.4494 13.4737 12.577 13.6692 12.6456C13.8647 12.7142 14.0767 12.7204 14.2759 12.6634C14.4751 12.6063 14.6517 12.4889 14.7812 12.3272C15.23 11.7572 15.8456 11.3416 16.542 11.1384C17.2384 10.9352 17.9808 10.9546 18.6657 11.1937C19.3506 11.4329 19.9436 11.88 20.3621 12.4726C20.7806 13.0651 21.0036 13.7736 21 14.499V20.999ZM6.99997 8.99903H2.99997C2.86863 8.99896 2.73856 9.02477 2.6172 9.075C2.49584 9.12523 2.38557 9.19888 2.2927 9.29176C2.19982 9.38463 2.12617 9.4949 2.07594 9.61626C2.02571 9.73762 1.9999 9.86769 1.99997 9.99903V21.999C1.99989 22.1304 2.02571 22.2604 2.07594 22.3818C2.12616 22.5032 2.19982 22.6134 2.29269 22.7063C2.38557 22.7992 2.49584 22.8728 2.6172 22.9231C2.73856 22.9733 2.86863 22.9991 2.99997 22.999H6.99997C7.13131 22.9991 7.26138 22.9733 7.38274 22.9231C7.5041 22.8728 7.61437 22.7992 7.70725 22.7063C7.80012 22.6134 7.87378 22.5032 7.92401 22.3818C7.97423 22.2604 8.00005 22.1304 7.99997 21.999V9.99903C8.00005 9.86769 7.97423 9.73762 7.924 9.61626C7.87378 9.4949 7.80012 9.38463 7.70724 9.29176C7.61437 9.19888 7.5041 9.12523 7.38274 9.075C7.26138 9.02477 7.13131 8.99896 6.99997 8.99903ZM5.99997 20.999H3.99997V10.999H5.99997V20.999ZM5.01462 1.54203C4.57698 1.51583 4.13859 1.57893 3.7261 1.72748C3.31361 1.87602 2.93564 2.10692 2.61519 2.40612C2.29473 2.70533 2.03849 3.06659 1.86203 3.46793C1.68557 3.86928 1.59259 4.30232 1.58875 4.74072C1.5849 5.17913 1.67027 5.61374 1.83966 6.01811C2.00904 6.42249 2.25891 6.78819 2.57407 7.09297C2.88922 7.39775 3.26308 7.63525 3.6729 7.79101C4.08272 7.94677 4.51994 8.01755 4.95797 7.99903H4.98629C5.42509 8.02509 5.86459 7.96141 6.27795 7.81188C6.6913 7.66235 7.06983 7.43011 7.39039 7.12934C7.71096 6.82858 7.96683 6.46561 8.14238 6.06261C8.31793 5.65962 8.40946 5.22506 8.41139 4.78549C8.41332 4.34593 8.3256 3.91058 8.15359 3.50606C7.98159 3.10154 7.7289 2.73634 7.41099 2.43278C7.09307 2.12921 6.7166 1.89366 6.30457 1.7405C5.89255 1.58735 5.45362 1.51982 5.01461 1.54203H5.01462ZM4.9863 5.99903H4.95797C4.78504 6.02003 4.60961 6.00381 4.44346 5.95146C4.27731 5.89911 4.12427 5.81184 3.99461 5.6955C3.86495 5.57915 3.76167 5.43643 3.69168 5.27691C3.6217 5.11738 3.58664 4.94473 3.58884 4.77054C3.58884 4.02444 4.14841 3.54202 5.01462 3.54202C5.18932 3.51873 5.36698 3.53315 5.53564 3.58431C5.70429 3.63546 5.86003 3.72216 5.99236 3.83857C6.12468 3.95499 6.23053 4.0984 6.30276 4.25916C6.37499 4.41992 6.41193 4.5943 6.4111 4.77054C6.4111 5.51663 5.85153 5.99903 4.9863 5.99903Z"
                      />
                    </svg>
                  </a>
                </div>
                <div>
                  <a
                    href="https://x.com/jaberson_j?t=tr2vvnZspTUBHQR6_j9wLQ&s=09"
                    target="_blank"
                    className="x"
                    rel="noreferrer"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 20L10.768 13.232M13.228 10.772L20 4M4 4L15.733 20H20L8.267 4H4Z"
                        stroke="#1c1c1c"
                        stroke-width="2px"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.behance.net/jabersonj"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#1c1c1c"
                        d="M22.1084 15.0316C21.9811 14.9989 21.8486 14.9916 21.7185 15.0103C21.5884 15.0289 21.4632 15.0731 21.3503 15.1402C21.2373 15.2074 21.1387 15.2962 21.0601 15.4016C20.9816 15.507 20.9247 15.6268 20.8926 15.7543C20.7095 16.4606 20.2751 17.076 19.6709 17.485C19.0666 17.8941 18.3339 18.0687 17.6101 17.9762C16.8863 17.8838 16.221 17.5305 15.739 16.9827C15.257 16.4349 14.9913 15.7301 14.9917 15.0004V14.0004H21.9917C22.123 14.0004 22.2531 13.9746 22.3744 13.9243C22.4958 13.8741 22.606 13.8004 22.6989 13.7076C22.7917 13.6147 22.8654 13.5045 22.9156 13.3831C22.9659 13.2618 22.9917 13.1317 22.9917 13.0004C22.9917 12.3438 22.8624 11.6936 22.6111 11.087C22.3598 10.4803 21.9915 9.92915 21.5272 9.46485C21.0629 9.00056 20.5117 8.63227 19.9051 8.38099C19.2985 8.12972 18.6483 8.00039 17.9917 8.00039C17.3351 8.00039 16.6849 8.12972 16.0783 8.38099C15.4717 8.63227 14.9205 9.00056 14.4562 9.46485C13.9919 9.92915 13.6236 10.4803 13.3723 11.087C13.121 11.6936 12.9917 12.3438 12.9917 13.0004V15.0004C12.9913 16.2176 13.435 17.3931 14.2397 18.3063C15.0443 19.2196 16.1545 19.8079 17.3621 19.9608C18.5696 20.1137 19.7914 19.8208 20.7983 19.1369C21.8052 18.4531 22.528 17.4253 22.8311 16.2465C22.8634 16.1193 22.8704 15.9869 22.8516 15.857C22.8328 15.7271 22.7886 15.6021 22.7215 15.4893C22.6544 15.3765 22.5657 15.278 22.4605 15.1994C22.3553 15.1209 22.2357 15.0639 22.1084 15.0316ZM17.9917 10.0004C18.7851 10.0007 19.5463 10.3141 20.1099 10.8725C20.4228 11.1925 20.6614 11.5776 20.8085 12.0004H15.176C15.3814 11.4171 15.7624 10.9118 16.2665 10.5537C16.7707 10.1956 17.3733 10.0023 17.9917 10.0004ZM15.9917 7.00039H19.9917C20.2569 7.00039 20.5113 6.89503 20.6988 6.7075C20.8863 6.51996 20.9917 6.26561 20.9917 6.00039C20.9917 5.73517 20.8863 5.48082 20.6988 5.29328C20.5113 5.10575 20.2569 5.00039 19.9917 5.00039H15.9917C15.7265 5.00039 15.4721 5.10575 15.2846 5.29328C15.0971 5.48082 14.9917 5.73517 14.9917 6.00039C14.9917 6.26561 15.0971 6.51996 15.2846 6.7075C15.4721 6.89503 15.7265 7.00039 15.9917 7.00039ZM9.9097 11.7175C10.4434 11.1499 10.799 10.4383 10.9327 9.67067C11.0663 8.90307 10.9721 8.11314 10.6617 7.39851C10.3512 6.68388 9.83816 6.07589 9.18592 5.64968C8.53368 5.22348 7.77084 4.99775 6.9917 5.00039H1.9917C1.86037 5.00035 1.73032 5.02619 1.60897 5.07644C1.48763 5.12668 1.37738 5.20034 1.28451 5.2932C1.19165 5.38607 1.11799 5.49632 1.06775 5.61766C1.01751 5.73901 0.991664 5.86906 0.991699 6.00039V19.0004C0.991665 19.1317 1.01751 19.2618 1.06775 19.3831C1.11799 19.5045 1.19165 19.6147 1.28452 19.7076C1.37738 19.8004 1.48763 19.8741 1.60898 19.9243C1.73032 19.9746 1.86037 20.0004 1.9917 20.0004H7.4917C8.46484 20.0021 9.41222 19.6878 10.1913 19.1048C10.9704 18.5217 11.5391 17.7013 11.8118 16.7672C12.0845 15.8331 12.0465 14.8356 11.7035 13.9249C11.3604 13.0143 10.7309 12.2396 9.9097 11.7175ZM2.9917 7.00039H6.9917C7.52213 7.00039 8.03084 7.2111 8.40591 7.58618C8.78099 7.96125 8.9917 8.46996 8.9917 9.00039C8.9917 9.53082 8.78099 10.0395 8.40591 10.4146C8.03084 10.7897 7.52213 11.0004 6.9917 11.0004H2.9917V7.00039ZM7.4917 18.0004H2.9917V13.0004H7.4917C8.15474 13.0004 8.79063 13.2638 9.25947 13.7326C9.72831 14.2015 9.9917 14.8373 9.9917 15.5004C9.9917 16.1634 9.72831 16.7993 9.25947 17.2682C8.79063 17.737 8.15474 18.0004 7.4917 18.0004Z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="Name">I'm Jaberson</div>
              <div className="designation ">
                <img src={UiUx} alt="" />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="HomeImage d-flex">
              <div className="">
                {' '}
                <img src={HomeImg} alt="" className="jabersonImg" />
              </div>
              <div className="socialMediaIcons1" id="socialMediaIcons1">
                <div className="HomeIconsImage">
                  <a
                    href="https://m.facebook.com/jaberson.sha.3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {' '}
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#1c1c1c"
                        d="M18.83 9.44C18.7383 9.30429 18.6146 9.19319 18.4699 9.11647C18.3252 9.03975 18.1638 8.99975 18 9H15V7H17.2C17.4652 7 17.7196 6.89464 17.9071 6.70711C18.0946 6.51957 18.2 6.26522 18.2 6V2C18.2 1.73478 18.0946 1.48043 17.9071 1.29289C17.7196 1.10536 17.4652 1 17.2 1H14C12.4617 1 10.9865 1.61107 9.89878 2.69878C8.81107 3.78649 8.2 5.26174 8.2 6.8V9H6C5.73478 9 5.48043 9.10536 5.29289 9.29289C5.10536 9.48043 5 9.73478 5 10V14C5 14.2652 5.10536 14.5196 5.29289 14.7071C5.48043 14.8946 5.73478 15 6 15H8.2V22C8.2 22.2652 8.30536 22.5196 8.49289 22.7071C8.68043 22.8946 8.93478 23 9.2 23H14C14.2652 23 14.5196 22.8946 14.7071 22.7071C14.8946 22.5196 15 22.2652 15 22V15H16.4C16.6003 15.0002 16.796 14.9402 16.9618 14.8279C17.1276 14.7156 17.2559 14.5561 17.33 14.37L18.93 10.37C18.9904 10.2186 19.0129 10.0547 18.9954 9.89259C18.978 9.7305 18.9212 9.57512 18.83 9.44ZM15.72 13H14C13.7348 13 13.4804 13.1054 13.2929 13.2929C13.1054 13.4804 13 13.7348 13 14V21H10.2V14C10.2 13.7348 10.0946 13.4804 9.90711 13.2929C9.71957 13.1054 9.46522 13 9.2 13H7V11H9.2C9.46522 11 9.71957 10.8946 9.90711 10.7071C10.0946 10.5196 10.2 10.2652 10.2 10V6.8C10.2026 5.79299 10.6038 4.82798 11.3159 4.11591C12.028 3.40384 12.993 3.00264 14 3H16.2V5H15.4C15.0614 4.95067 14.7163 4.97137 14.3861 5.06082C14.0558 5.15026 13.7474 5.30655 13.48 5.52C13.3177 5.6899 13.1915 5.8909 13.109 6.11089C13.0265 6.33087 12.9894 6.56529 13 6.8V10C13 10.2652 13.1054 10.5196 13.2929 10.7071C13.4804 10.8946 13.7348 11 14 11H16.52L15.72 13Z"
                      />
                    </svg>
                  </a>
                </div>
                <div className="HomeIconsImage">
                  <a
                    href="https://www.instagram.com/jdesigns2930/?igshid=YmMyMTA2M2Y%3D"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#1c1c1c"
                        d="M12 7C11.0111 7 10.0444 7.29324 9.22215 7.84265C8.3999 8.39206 7.75904 9.17295 7.3806 10.0866C7.00216 11.0002 6.90315 12.0055 7.09607 12.9755C7.289 13.9454 7.7652 14.8363 8.46447 15.5355C9.16373 16.2348 10.0546 16.711 11.0245 16.9039C11.9945 17.0969 12.9998 16.9978 13.9134 16.6194C14.827 16.241 15.6079 15.6001 16.1573 14.7779C16.7068 13.9556 17 12.9889 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM12 15C11.4067 15 10.8266 14.8241 10.3333 14.4944C9.83994 14.1648 9.45542 13.6962 9.22836 13.1481C9.0013 12.5999 8.94189 11.9967 9.05764 11.4147C9.1734 10.8328 9.45912 10.2982 9.87868 9.87868C10.2982 9.45912 10.8328 9.1734 11.4147 9.05764C11.9967 8.94189 12.5999 9.0013 13.1481 9.22836C13.6962 9.45542 14.1648 9.83994 14.4944 10.3333C14.8241 10.8266 15 11.4067 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15ZM17 6C16.8022 6 16.6089 6.05865 16.4444 6.16853C16.28 6.27841 16.1518 6.43459 16.0761 6.61732C16.0004 6.80004 15.9806 7.00111 16.0192 7.19509C16.0578 7.38907 16.153 7.56725 16.2929 7.70711C16.4327 7.84696 16.6109 7.9422 16.8049 7.98079C16.9989 8.01937 17.2 7.99957 17.3827 7.92388C17.5654 7.84819 17.7216 7.72002 17.8315 7.55557C17.9414 7.39112 18 7.19778 18 7C18 6.73478 17.8946 6.48043 17.7071 6.29289C17.5196 6.10536 17.2652 6 17 6ZM21.94 8.24C21.9234 7.38542 21.7611 6.53995 21.46 5.74C21.1808 5.01207 20.7516 4.35099 20.2003 3.7997C19.649 3.2484 18.9879 2.81922 18.26 2.54C17.4601 2.2389 16.6146 2.07657 15.76 2.06C14.79 2 14.47 2 12 2C9.53 2 9.21 2 8.24 2.06C7.38542 2.07657 6.53995 2.2389 5.74 2.54C5.01207 2.81922 4.35099 3.2484 3.7997 3.7997C3.2484 4.35099 2.81922 5.01207 2.54 5.74C2.2389 6.53995 2.07657 7.38542 2.06 8.24C2 9.22 2 9.54 2 12C2 14.46 2 14.78 2.06 15.76C2.07657 16.6146 2.2389 17.4601 2.54 18.26C2.81922 18.9879 3.2484 19.649 3.7997 20.2003C4.35099 20.7516 5.01207 21.1808 5.74 21.46C6.53995 21.7611 7.38542 21.9234 8.24 21.94C9.24 21.94 9.53 22 12 22C14.47 22 14.79 22 15.76 21.94C16.6146 21.9234 17.4601 21.7611 18.26 21.46C18.9879 21.1808 19.649 20.7516 20.2003 20.2003C20.7516 19.649 21.1808 18.9879 21.46 18.26C21.7611 17.4601 21.9234 16.6146 21.94 15.76C21.94 14.76 22 14.46 22 12C22 9.54 22 9.22 21.94 8.24ZM19.94 15.67C19.9225 16.3046 19.8043 16.9324 19.59 17.53C19.4128 18.0023 19.1327 18.4293 18.77 18.78C18.4214 19.1428 17.9936 19.4201 17.52 19.59C16.921 19.8131 16.289 19.9348 15.65 19.95C14.71 19.95 14.42 20 11.99 20C9.56 20 9.28 20 8.34 20C7.70202 19.9835 7.07075 19.8654 6.47 19.65C5.99766 19.4728 5.57067 19.1927 5.22 18.83C4.85715 18.4814 4.57992 18.0536 4.41 17.58C4.1878 16.9842 4.06615 16.3557 4.05 15.72C4.05 14.72 4.05 14.47 4.05 12.05C4.05 9.63 4.05 9.34 4.05 8.38C4.06724 7.74121 4.18884 7.10954 4.41 6.51C4.58256 6.04063 4.85953 5.61662 5.22 5.27C5.56858 4.90715 5.99641 4.62992 6.47 4.46C7.06899 4.2369 7.70099 4.11523 8.34 4.1C9.28 4 9.57 4 12 4C14.43 4 14.72 4 15.66 4C16.3021 4.01633 16.9373 4.13794 17.54 4.36C18.0094 4.53256 18.4334 4.80953 18.78 5.17C19.1428 5.51858 19.4201 5.94641 19.59 6.42C19.8348 7.02856 19.9735 7.67458 20 8.33C20 9.33 20.05 9.58 20.05 12C20.05 14.42 20 14.71 20 15.67H19.94Z"
                      />
                    </svg>
                  </a>
                </div>
                <div className="HomeIconsImage">
                  <a
                    href="https://www.linkedin.com/in/jaberson-j-3b4557237"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#1c1c1c"
                        d="M17.5 8.99903C16.6047 8.99865 15.7233 9.22009 14.9345 9.64356C14.8626 9.45399 14.7346 9.2908 14.5677 9.17567C14.4008 9.06055 14.2027 8.99894 14 8.99903H9.99997C9.86863 8.99896 9.73856 9.02477 9.6172 9.075C9.49584 9.12523 9.38557 9.19888 9.2927 9.29176C9.19982 9.38463 9.12617 9.4949 9.07594 9.61626C9.02571 9.73762 8.9999 9.86769 8.99997 9.99903V21.999C8.99989 22.1304 9.02571 22.2604 9.07594 22.3818C9.12616 22.5032 9.19982 22.6134 9.29269 22.7063C9.38557 22.7992 9.49584 22.8728 9.6172 22.9231C9.73856 22.9733 9.86863 22.9991 9.99997 22.999H14C14.1313 22.9991 14.2614 22.9733 14.3827 22.9231C14.5041 22.8728 14.6144 22.7992 14.7072 22.7063C14.8001 22.6134 14.8738 22.5032 14.924 22.3818C14.9742 22.2604 15 22.1304 15 21.999V16.499C15 16.2338 15.1053 15.9795 15.2929 15.7919C15.4804 15.6044 15.7348 15.499 16 15.499C16.2652 15.499 16.5195 15.6044 16.7071 15.7919C16.8946 15.9795 17 16.2338 17 16.499V21.999C16.9999 22.1304 17.0257 22.2604 17.0759 22.3818C17.1262 22.5032 17.1998 22.6134 17.2927 22.7063C17.3856 22.7992 17.4958 22.8728 17.6172 22.9231C17.7386 22.9733 17.8686 22.9991 18 22.999H22C22.1313 22.9991 22.2614 22.9733 22.3827 22.9231C22.5041 22.8728 22.6144 22.7992 22.7072 22.7063C22.8001 22.6134 22.8738 22.5032 22.924 22.3818C22.9742 22.2604 23 22.1304 23 21.999V14.499C22.9982 13.0409 22.4181 11.643 21.3871 10.6119C20.356 9.58089 18.9581 9.00084 17.5 8.99903ZM21 20.999H19V16.499C19 15.7034 18.6839 14.9403 18.1213 14.3777C17.5587 13.8151 16.7956 13.499 16 13.499C15.2043 13.499 14.4413 13.8151 13.8786 14.3777C13.316 14.9403 13 15.7034 13 16.499V20.999H11V10.999H13V11.7022C13.0001 11.9094 13.0645 12.1114 13.1844 12.2804C13.3043 12.4494 13.4737 12.577 13.6692 12.6456C13.8647 12.7142 14.0767 12.7204 14.2759 12.6634C14.4751 12.6063 14.6517 12.4889 14.7812 12.3272C15.23 11.7572 15.8456 11.3416 16.542 11.1384C17.2384 10.9352 17.9808 10.9546 18.6657 11.1937C19.3506 11.4329 19.9436 11.88 20.3621 12.4726C20.7806 13.0651 21.0036 13.7736 21 14.499V20.999ZM6.99997 8.99903H2.99997C2.86863 8.99896 2.73856 9.02477 2.6172 9.075C2.49584 9.12523 2.38557 9.19888 2.2927 9.29176C2.19982 9.38463 2.12617 9.4949 2.07594 9.61626C2.02571 9.73762 1.9999 9.86769 1.99997 9.99903V21.999C1.99989 22.1304 2.02571 22.2604 2.07594 22.3818C2.12616 22.5032 2.19982 22.6134 2.29269 22.7063C2.38557 22.7992 2.49584 22.8728 2.6172 22.9231C2.73856 22.9733 2.86863 22.9991 2.99997 22.999H6.99997C7.13131 22.9991 7.26138 22.9733 7.38274 22.9231C7.5041 22.8728 7.61437 22.7992 7.70725 22.7063C7.80012 22.6134 7.87378 22.5032 7.92401 22.3818C7.97423 22.2604 8.00005 22.1304 7.99997 21.999V9.99903C8.00005 9.86769 7.97423 9.73762 7.924 9.61626C7.87378 9.4949 7.80012 9.38463 7.70724 9.29176C7.61437 9.19888 7.5041 9.12523 7.38274 9.075C7.26138 9.02477 7.13131 8.99896 6.99997 8.99903ZM5.99997 20.999H3.99997V10.999H5.99997V20.999ZM5.01462 1.54203C4.57698 1.51583 4.13859 1.57893 3.7261 1.72748C3.31361 1.87602 2.93564 2.10692 2.61519 2.40612C2.29473 2.70533 2.03849 3.06659 1.86203 3.46793C1.68557 3.86928 1.59259 4.30232 1.58875 4.74072C1.5849 5.17913 1.67027 5.61374 1.83966 6.01811C2.00904 6.42249 2.25891 6.78819 2.57407 7.09297C2.88922 7.39775 3.26308 7.63525 3.6729 7.79101C4.08272 7.94677 4.51994 8.01755 4.95797 7.99903H4.98629C5.42509 8.02509 5.86459 7.96141 6.27795 7.81188C6.6913 7.66235 7.06983 7.43011 7.39039 7.12934C7.71096 6.82858 7.96683 6.46561 8.14238 6.06261C8.31793 5.65962 8.40946 5.22506 8.41139 4.78549C8.41332 4.34593 8.3256 3.91058 8.15359 3.50606C7.98159 3.10154 7.7289 2.73634 7.41099 2.43278C7.09307 2.12921 6.7166 1.89366 6.30457 1.7405C5.89255 1.58735 5.45362 1.51982 5.01461 1.54203H5.01462ZM4.9863 5.99903H4.95797C4.78504 6.02003 4.60961 6.00381 4.44346 5.95146C4.27731 5.89911 4.12427 5.81184 3.99461 5.6955C3.86495 5.57915 3.76167 5.43643 3.69168 5.27691C3.6217 5.11738 3.58664 4.94473 3.58884 4.77054C3.58884 4.02444 4.14841 3.54202 5.01462 3.54202C5.18932 3.51873 5.36698 3.53315 5.53564 3.58431C5.70429 3.63546 5.86003 3.72216 5.99236 3.83857C6.12468 3.95499 6.23053 4.0984 6.30276 4.25916C6.37499 4.41992 6.41193 4.5943 6.4111 4.77054C6.4111 5.51663 5.85153 5.99903 4.9863 5.99903Z"
                      />
                    </svg>
                  </a>
                </div>
                <div className="HomeIconsImage">
                  <a
                    href="https://x.com/jaberson_j?t=tr2vvnZspTUBHQR6_j9wLQ&s=09"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 20L10.768 13.232M13.228 10.772L20 4M4 4L15.733 20H20L8.267 4H4Z"
                        stroke="#1c1c1c"
                        stroke-width="2px"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </div>
                <div className="HomeIconsImage">
                  <a
                    href="https://www.behance.net/jabersonj"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#1c1c1c"
                        d="M22.1084 15.0316C21.9811 14.9989 21.8486 14.9916 21.7185 15.0103C21.5884 15.0289 21.4632 15.0731 21.3503 15.1402C21.2373 15.2074 21.1387 15.2962 21.0601 15.4016C20.9816 15.507 20.9247 15.6268 20.8926 15.7543C20.7095 16.4606 20.2751 17.076 19.6709 17.485C19.0666 17.8941 18.3339 18.0687 17.6101 17.9762C16.8863 17.8838 16.221 17.5305 15.739 16.9827C15.257 16.4349 14.9913 15.7301 14.9917 15.0004V14.0004H21.9917C22.123 14.0004 22.2531 13.9746 22.3744 13.9243C22.4958 13.8741 22.606 13.8004 22.6989 13.7076C22.7917 13.6147 22.8654 13.5045 22.9156 13.3831C22.9659 13.2618 22.9917 13.1317 22.9917 13.0004C22.9917 12.3438 22.8624 11.6936 22.6111 11.087C22.3598 10.4803 21.9915 9.92915 21.5272 9.46485C21.0629 9.00056 20.5117 8.63227 19.9051 8.38099C19.2985 8.12972 18.6483 8.00039 17.9917 8.00039C17.3351 8.00039 16.6849 8.12972 16.0783 8.38099C15.4717 8.63227 14.9205 9.00056 14.4562 9.46485C13.9919 9.92915 13.6236 10.4803 13.3723 11.087C13.121 11.6936 12.9917 12.3438 12.9917 13.0004V15.0004C12.9913 16.2176 13.435 17.3931 14.2397 18.3063C15.0443 19.2196 16.1545 19.8079 17.3621 19.9608C18.5696 20.1137 19.7914 19.8208 20.7983 19.1369C21.8052 18.4531 22.528 17.4253 22.8311 16.2465C22.8634 16.1193 22.8704 15.9869 22.8516 15.857C22.8328 15.7271 22.7886 15.6021 22.7215 15.4893C22.6544 15.3765 22.5657 15.278 22.4605 15.1994C22.3553 15.1209 22.2357 15.0639 22.1084 15.0316ZM17.9917 10.0004C18.7851 10.0007 19.5463 10.3141 20.1099 10.8725C20.4228 11.1925 20.6614 11.5776 20.8085 12.0004H15.176C15.3814 11.4171 15.7624 10.9118 16.2665 10.5537C16.7707 10.1956 17.3733 10.0023 17.9917 10.0004ZM15.9917 7.00039H19.9917C20.2569 7.00039 20.5113 6.89503 20.6988 6.7075C20.8863 6.51996 20.9917 6.26561 20.9917 6.00039C20.9917 5.73517 20.8863 5.48082 20.6988 5.29328C20.5113 5.10575 20.2569 5.00039 19.9917 5.00039H15.9917C15.7265 5.00039 15.4721 5.10575 15.2846 5.29328C15.0971 5.48082 14.9917 5.73517 14.9917 6.00039C14.9917 6.26561 15.0971 6.51996 15.2846 6.7075C15.4721 6.89503 15.7265 7.00039 15.9917 7.00039ZM9.9097 11.7175C10.4434 11.1499 10.799 10.4383 10.9327 9.67067C11.0663 8.90307 10.9721 8.11314 10.6617 7.39851C10.3512 6.68388 9.83816 6.07589 9.18592 5.64968C8.53368 5.22348 7.77084 4.99775 6.9917 5.00039H1.9917C1.86037 5.00035 1.73032 5.02619 1.60897 5.07644C1.48763 5.12668 1.37738 5.20034 1.28451 5.2932C1.19165 5.38607 1.11799 5.49632 1.06775 5.61766C1.01751 5.73901 0.991664 5.86906 0.991699 6.00039V19.0004C0.991665 19.1317 1.01751 19.2618 1.06775 19.3831C1.11799 19.5045 1.19165 19.6147 1.28452 19.7076C1.37738 19.8004 1.48763 19.8741 1.60898 19.9243C1.73032 19.9746 1.86037 20.0004 1.9917 20.0004H7.4917C8.46484 20.0021 9.41222 19.6878 10.1913 19.1048C10.9704 18.5217 11.5391 17.7013 11.8118 16.7672C12.0845 15.8331 12.0465 14.8356 11.7035 13.9249C11.3604 13.0143 10.7309 12.2396 9.9097 11.7175ZM2.9917 7.00039H6.9917C7.52213 7.00039 8.03084 7.2111 8.40591 7.58618C8.78099 7.96125 8.9917 8.46996 8.9917 9.00039C8.9917 9.53082 8.78099 10.0395 8.40591 10.4146C8.03084 10.7897 7.52213 11.0004 6.9917 11.0004H2.9917V7.00039ZM7.4917 18.0004H2.9917V13.0004H7.4917C8.15474 13.0004 8.79063 13.2638 9.25947 13.7326C9.72831 14.2015 9.9917 14.8373 9.9917 15.5004C9.9917 16.1634 9.72831 16.7993 9.25947 17.2682C8.79063 17.737 8.15474 18.0004 7.4917 18.0004Z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
