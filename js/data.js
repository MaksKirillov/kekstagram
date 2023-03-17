import {getRandomItem, getRandomNumber} from './util.js';

//Константы
const PHOTOS_COUNT = 25;
const DESCRIPTIONS = ['Незаурядноая личность с жизнерадостной натурой и креативным мышлением',
  'Мой ум переполнен идеями и амбициями, которые он готов воплощать в жизнь',
  'Продвинутый специалист, который с легкостью находит нестандартные решения и не боится экспериментировать',
  'В кругу друзей раскрываюсь и становлюсь живым и общительным',
  'В свободное время люблю заниматься спортом и делиться своими тренировками и достижениями в социальных сетях',
  'Увлекаюсь кулинарией и часто готовит сложные блюда для своих близких',
  'Творческий человек, также очень ответственен и надежен',
  'Люди часто обращаются ко мне за советом и помощью',
  'Всегда готов выслушать и поддержать',
  'Программист фронтенда со стажем 10000 лет'];

//Функция для герерации фото объектов
const generatePhoto = (i) => ({
  id:i + 1,
  url:['photos/', i + 1, '.jpg'].join(''),
  description:getRandomItem(DESCRIPTIONS),
  likes:getRandomNumber(15,200),
  comments:getRandomNumber(0,200)
});

//Фото-объекты
const generatePhotos = () => Array.from({length: PHOTOS_COUNT}, (_, index) => generatePhoto(index));
const photos = generatePhotos();

export {PHOTOS_COUNT, DESCRIPTIONS, photos};