1.使用している主な技術
--フロントエンドフレームワーク Node.js, React
<img src="https://img.shields.io/badge/-Node.js-000000.svg?logo=node.js&style=for-the-badge">
<img src="https://img.shields.io/badge/-React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
--フロントエンド言語 Typescript
--バックエンドフレームワーク
--バックエンド言語
--ミドルウェア Firebase
--インフラ
--その他

2.プロジェクトの概要
プロジェクト名：問い合わせホーム
プロジェクト概要：問い合わせのためのチャット機能
プロジェクトの詳細リンク：https://chat-app-b2c5d.web.app

3.必要な環境変数やコマンド一覧
yarn run dev : localhost起動コマンド

4.ディレクトリ構成
.
├── .firebase
│   └── hosting.YnVpbGQ.cache
├── .public
    └──
        ├── cat.png
        ├── favicon.ico
        ├── icon.png
        ├── index.html
        ├── logo192.png
        ├── logo512.png
        ├── logobird.png
        ├── logofirst.png
        ├── manifest.json
        └── robots.txt
├── .public
    └──
        ├── app
        │   ├── hooks.ts
        │   └── store.ts
        ├── components
        │   ├── chat
        │   │   ├── Chat.scss
        │   │   ├── Chat.tsx
        │   │   ├── ChatHeader.scss
        │   │   ├── ChatHeader.tsx
        │   │   ├── ChatMessage.scss
        │   │   └── ChatMessage.tsx
        │   ├── login
        │   │   ├── Login.scss
        │   │   └── Login.tsx
        │   └── sidebar
        │       ├── Sidebar.scss
        │       ├── Sidebar.tsx
        │       ├── SidebarChannel.scss
        │       └── SidebarChannel.tsx
        ├── features
        │   ├── channelSlice.ts
        │   └── userSlice.ts
        ├── hooks
        │   ├── useCollection.tsx
        │   └── useSubCollection.tsx
        ├── utils
        │   └── ErrorFallBack.tsx
        ├── App.scss
        ├── App.tsx
        ├── firebase.ts
        ├── index.scss
        ├── index.tsx
        ├── react-app-env.d.ts
        └── Types.ts
├── .gitignore
├── Makefile
├── README.md
├── package.json
├── package-lock.json
├── tsconfig.json
├── .firebaserc

5.開発環境の構築方法
Dockerは今回不使用のため記載なし

6.トラブルシューティング
Dockerは今回不使用のため記載なし







# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
# chat-app
