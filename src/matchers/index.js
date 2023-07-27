export default function sortHeroList(list) {
  return list.sort((x, y) => (y.health - x.health));
}
