import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  standalone: true,
  selector: 'angular-demo-component',
  template: `
    <div class="component-container">
      <div class="component-inner-container">
        <div class="icons-container">
                    <span class="icon angular-icon">
                                      <svg width="29" height="29" viewBox="0 0 29 29" fill="none"
                                           xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_6296_314165)">
                <path
                  d="M14.2504 0.75L1.65039 5.398L3.5722 22.632L14.2504 28.75L24.9286 22.632L26.8504 5.398L14.2504 0.75Z"
                  fill="#DD0031"/>
                <path d="M14.25 0.75V3.858V3.844V18.026V28.75L24.9282 22.632L26.85 5.398L14.25 0.75Z" fill="#C3002F"/>
                <path
                  d="M14.2507 3.84399L6.37402 22.114H9.31087L10.8943 18.026H17.58L19.1635 22.114H22.1003L14.2507 3.84399ZM16.5515 15.506H11.95L14.2507 9.77999L16.5515 15.506Z"
                  fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_6296_314165">
                <rect x="0.25" y="0.75" width="28" height="28" rx="2" fill="white"/>
                </clipPath>
                </defs>
                </svg>
                    </span>

          <span class="icon myop-icon">
                            <svg width="29" height="15" viewBox="0 0 29 15" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.38858 3.83703C7.38858 5.81809 5.90249 7.42406 4.06929 7.42406C2.2361 7.42406 0.75 5.81809 0.75 3.83703C0.75 1.85597 2.2361 0.25 4.06929 0.25C5.90249 0.25 7.38858 1.85597 7.38858 3.83703Z"
                  fill="#0A090A"/>
                <path
                  d="M8.72543 0.686405V7.00857C8.72543 7.16321 8.84058 7.28774 8.98266 7.29463C10.1574 7.35161 11.6504 7.84636 13.3347 10.2647C15.4883 13.3567 20.106 14.3758 22.2305 14.2378C22.3619 14.2293 22.4602 14.1087 22.4602 13.9656V8.47234C22.471 8.19249 22.5161 7.789 22.6804 7.63683C22.8338 7.49475 23.0855 7.44277 23.2679 7.42409H28.4925C28.6347 7.42409 28.75 7.29873 28.75 7.14409V0.758359C28.75 0.603719 28.6347 0.478359 28.4925 0.478359H22.5802C22.438 0.478359 22.3227 0.603719 22.3227 0.758359V6.27918C22.3046 6.56256 22.2561 6.85885 22.1376 6.96935C21.9613 7.13374 21.7028 7.13761 21.5627 7.12496C20.1985 6.85056 19.4647 6.43662 16.7801 3.52207C14.0885 0.600002 10.4842 0.418403 8.98222 0.407147C8.84001 0.406081 8.72543 0.531765 8.72543 0.686405Z"
                  fill="#0A090A"/>
                </svg>
                    </span>
        </div>

        <div class="content-text">
          <h2 class="title">Nice Component!</h2>
          <p class="subtitle">Made with Myop</p>
        </div>

        <div class="buttons-container">
          <button class="btn btn-outline">
            Like it!
          </button>

          <button class="btn btn-primary">
            Cool
          </button>
        </div>
      </div>
    </div>

  `,
  styles: [`

    .component-container {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .component-inner-container {
      padding: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 272px;
      height: 272px;
      justify-content: center;
      gap: 20px;
      border-radius: 200px;
      background: rgb(240, 232, 255);
    }

    .icons-container {
      display: flex;
      position: relative;
    }

    .icon {
      background-color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      height: 60px;
      gap: 8px;
      flex-shrink: 0;
      aspect-ratio: 1/1;
      border-radius: 800px;
      border: 1px solid black;
    }

    .angular-icon {
      margin-top: -25px;
      margin-right: -25px;
    }

    .myop-icon {
      z-index: 1;
    }

    .angular-icon svg, .myop-icon svg {
      width: 24px;
      height: 24px;
    }

    .content-text {
      text-align: center;
    }

    .title {
      margin: 0;
      color: #000;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 24px;
      font-family: "priego"!important;
      letter-spacing: 1.5px
    }

    .subtitle {
      margin: 4px 0 0;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 18px;
      color: #000;
      font-family: "priego";
    }

    .buttons-container {
      display: flex;
      gap: 8px;
    }

    .btn {
      padding: 8px 16px;
      border: 1px solid #5A595B;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.2s;
      border-radius: 4px;
    }

    .btn-outline {
      background-color: white;
    }

    .btn-outline:hover {
      background-color: #f5f5f5;
    }

    .btn-primary {
      color: white;
      background-color: #343738;
    }

    .btn-primary:hover {
      background-color: black;
    }


  `],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class DemoComponent {
  @Input() userName = 'John Doe';
  @Input() email = 'john.doe@example.com';

  sayHello() {
    alert(`Hello from ${this.userName}`);
  }
}

