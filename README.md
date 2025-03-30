Tämän laskurin idean sain siitä, että tein harjoittelussanin VUE:lla tällaise laskurikokoelman ja halusin testata miltä vastaavanlainen näyttäisi REACT:lla tehtynä. Lisäksi olen tehnyt backendia toisessa projektissa harjoittelussa ja tähän olen myös harjoitellut testauksia. Näistä yhdistelmänä siis päädyin tällaiseen ratkaisuun. Lisäksi yhdistin tähän Frontend-kurssilla tehtyä tekstianalysaattorin pohjaa, sekä kyseisen kurssin lopputyötä.


Unit testing: Jest

npm install react react-dom tailwindcss postcss autoprefixer clsx tailwind-merge lucide-react

npm install -D vitest @vue/test-utils 

npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event jest-environment-jsdom

npm install -D jest jest-environment-jsdom @testing-library/react @testing-library/dom @testing-library/jest-dom ts-node

npm init jest@latest 

npm install --save-dev @vitejs/plugin-react jest-transform-stub identity-obj-proxy

npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-jest

npm install -D vite @vitejs/plugin-react eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh vitest

npm install tailwindcss @tailwindcss/vite  

npx tailwindcss init -p

npm install -D tailwindcss postcss autoprefixer tailwindcss-animate 


Testauskomennot:

npm test

npm run test:coverage 


Sovelluksen käynnistyskomento:
npm run dev


Paketit:
React
React DOM


Kehitysriippuvuudet:
Vite
@vitejs/plugin-react
Tailwind CSS
PostCSS
Autoprefixer
ESLint
eslint-plugin-react
eslint-plugin-react-hooks
eslint-plugin-react-refresh

Testausriippuvuudet:
Jest
@testing-library/react
@testing-library/jest-dom
@testing-library/user-event
jest-environment-jsdom
babel-jest
@babel/core
@babel/preset-env
@babel/preset-react
identity-obj-proxy


Testaukset olivat melko yksikertaisia ja toistuvia, mutta toki oli yksikertainen sovelluskin ja koodia pääsääntöisesti toistuvaa ja poikkeukset lähinnä laskentakaavoissa.
Koodi eri laskuriosioissa oli lähinnä kopioitua, joten eniten kommetteja lisäilin ensimmäisiin tiedostoihin.
Pahoittelut koodissa on sekä englannin, että suomenkielen sekoitus. Tämä voi näyttää hieman sekavalta.




Sources: 

https://nextjs.org/docs/app/building-your-application/testing/jest

