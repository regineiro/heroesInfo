import React from 'react';
import Card from "./card";

const heroes = [
  {
    name: "Бетмен",
    link: 'https://www.dc.com/characters/batman',
    universe: "DC Comics",
    alterego: "Брюс Уэйн",
    occupation: "борец с преступностью, филантроп, миллиардер",
    friends: "Робин, Бэтгерл",
    superpowers: "интеллект, обширные познания, знания боевых искусств, ловкость",
    url: "https://n1s1.hsmedia.ru/13/a5/b2/13a5b2373d5e23489d9a4949ada5b927/547x397_0xac120002_8752067681540468870.jpg"
  },
  {
    name: "Супермен",
    link: 'https://www.dc.com/characters/superman',
    universe: "DC Comics",
    alterego: "Кларк Кент",
    occupation: "борец за справедливость",
    friends: "собака Крипто",
    superpowers: "непробиваемость, суперсила, полёт, самоисцеление, суперзрение и суперслух, классный костюм",
    url: "https://n1s1.hsmedia.ru/06/d3/73/06d37321618034ec5f2a65b09c8576e3/547x397_0xac120002_45567661540468871.jpg"
  },
  {
    name: "Железный человек",
    link: 'https://www.marvel.com/characters/iron-man-tony-stark',
    universe: "Marvel Comics",
    alterego: "Тони Старк",
    occupation: "гений, миллиардер, плейбой, филантроп",
    friends: "Мстители",
    superpowers: "высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы",
    url: "https://n1s1.hsmedia.ru/7b/56/08/7b5608ec3df83d872fa1162fb9e32f28/547x397_0xac120002_1773711401540468871.jpg"
  },
  {
    name: "Спайдер-мен/Человек-паук",
    link: 'https://www.marvel.com/characters/spider-man-peter-parker',
    universe: "Marvel Comics",
    alterego: "Питер Паркер",
    occupation: "борец за справедливость, студент, фотограф",
    friends: "Мстители, Фантастическая четверка, Люди Икс",
    superpowers: "сверхчеловеческие рефлексы, «паучье чутьё», способность прилепляться к твердым поверхностям, производство паутины",
    url: "https://n1s1.hsmedia.ru/37/39/74/373974effcc7ccd093d849e8fa062091/547x397_0xac120002_9548247751540468871.jpg"
  },
  {
    name: "Капитан Америка",
    link: 'https://www.marvel.com/characters/captain-america-steve-rogers',
    universe: "Marvel Comics",
    alterego: "Стивен Роджерс",
    occupation: "супер-солдат",
    friends: "Мстители",
    superpowers: "сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя",
    url: "https://n1s1.hsmedia.ru/41/8f/05/418f050c767eeca8854b328914c7bccc/547x397_0xac120002_20106541761540468871.jpg"
  },
  {
    name: "Тор",
    link: 'https://www.marvel.com/characters/thor-thor-odinson',
    universe: "Marvel Comics",
    alterego: "нет; полное имя — Тор Одинсон",
    occupation: "борец за справедливость, скандинавский бог",
    friends: "Мстители",
    superpowers: "всё, что может бог, плюс молот Мьелнир",
    url: "https://n1s1.hsmedia.ru/52/a3/e1/52a3e14a0c8f02715b763e7a20fe1c00/547x397_0xac120002_19311926741540468872.jpg"
  },
  {
    name: "Халк",
    link: 'https://www.marvel.com/characters/hulk-bruce-banner',
    universe: "Marvel Comics",
    alterego: "Брюс Беннер",
    occupation: "супергерой, борец за справедливость, ученый-биохимик",
    friends: "Мстители",
    superpowers: "сверхчеловеческая сила и скорость, выносливость, полёт",
    url: "https://n1s1.hsmedia.ru/9a/28/e7/9a28e7b059594fc10387669ae4bd2f22/547x397_0xac120002_20162335021540468872.jpg"
  },
  {
    name: "Чудо-женщина",
    link: 'https://www.dc.com/characters/wonder-woman',
    universe: "DC Comics",
    alterego: "Диана Принс",
    occupation: "супергероиня, секретарь-референт",
    friends: "Лига Справедливости, Бэтмен, Супермен",
    superpowers: "сверхчеловеческая сила искорость, выносливость, полёт",
    url: "https://n1s1.hsmedia.ru/87/ed/c5/87edc525d8813c7b2899e04a4e562fe9/547x397_0xac120002_6444132261540468872.jpg"
  },
  {
    name: "Черная вдова",
    link: 'https://www.marvel.com/characters/black-widow-natasha-romanoff',
    universe: "Marvel Comics",
    alterego: "Наташа Романофф",
    occupation: "супергероиня, шпионка",
    friends: "Мстители",
    url: 'https://n1s1.hsmedia.ru/e0/2b/55/e02b55b147eeaff9b3fe6bdbb36ff9ea/547x397_0xac120002_744074131540468872.jpg',
    superpowers: "пик человеческого физического потенциала, замедленное старение, знание многих языков"
  },
  {
    name: "Дэдпул",
    link: 'https://www.marvel.com/characters/deadpool-wade-wilson',
    universe: "Marvel Comics",
    alterego: "Уэйд Уинстон Уилсон",
    occupation: "антигерой, наёмник",
    friends: "частично Мстители, Человек-паук, Росомаха",
    superpowers: "высокий болевой порог, регенерация и бессмертие, сверхчеловеческая иммунная система",
    url: "https://n1s1.hsmedia.ru/34/93/39/3493392c94fc2ae0552ef9c7e87f2617/728x382_1_cc2a743fd686b7b2e256c062966bb465@1034x543_0xac120002_2692921231540468872.jpg"
  }
]
const Heroes = () => {
  return (
   <React.Fragment>
     {heroes.map(({ name,link, universe, alterego, occupation, friends, superpowers, url }) => (
       <Card
         key={name}
         name={name}
         link={link}
         universe={universe}
         alterego={alterego}
         occupation={occupation}
         friends={friends}
         superpowers={superpowers}
         url={url}
       />
     ))}
   </React.Fragment>
  );
}

export default Heroes;