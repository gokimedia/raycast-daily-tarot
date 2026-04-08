export type Card = {
  name: string;
  arcana: "Major" | "Minor";
  element: string;
  upright: string;
  reversed: string;
  love: string;
  career: string;
  yesNo: "Yes" | "No" | "Maybe";
  guideUrl: string;
};

export const DECK: Card[] = [
  {
    name: "The Fool",
    arcana: "Major",
    element: "Air",
    upright: "New beginnings, innocence, adventure",
    reversed: "Recklessness, fear of change",
    love: "Exciting new romance",
    career: "New career path, leap of faith",
    yesNo: "Yes",
    guideUrl: "https://deckaura.com/blogs/guide/fool-tarot-meaning",
  },
  {
    name: "The Magician",
    arcana: "Major",
    element: "Air",
    upright: "Manifestation, willpower, resourcefulness",
    reversed: "Manipulation, poor planning",
    love: "Magnetic attraction",
    career: "Skill mastery, new opportunity",
    yesNo: "Yes",
    guideUrl: "https://deckaura.com/blogs/guide/magician-tarot-meaning",
  },
  {
    name: "The Empress",
    arcana: "Major",
    element: "Earth",
    upright: "Abundance, nurturing, fertility",
    reversed: "Insecurity, creative block",
    love: "Deep love, sensual connection",
    career: "Growth, creative success",
    yesNo: "Yes",
    guideUrl: "https://deckaura.com/blogs/guide/empress-tarot-meaning",
  },
  {
    name: "The Star",
    arcana: "Major",
    element: "Air",
    upright: "Hope, faith, renewal, inspiration",
    reversed: "Hopelessness, despair",
    love: "Spiritual connection, healing",
    career: "Renewed purpose, inspiration",
    yesNo: "Yes",
    guideUrl: "https://deckaura.com/blogs/guide/star-tarot-meaning",
  },
  {
    name: "The World",
    arcana: "Major",
    element: "Earth",
    upright: "Completion, integration, accomplishment",
    reversed: "Incompletion, shortcuts",
    love: "Lasting union, fulfillment",
    career: "Graduation, achievement",
    yesNo: "Yes",
    guideUrl: "https://deckaura.com/blogs/guide/world-tarot-meaning",
  },
];

export function drawRandom(): Card {
  return DECK[Math.floor(Math.random() * DECK.length)]!;
}

export function dailyCard(): Card {
  const today = new Date();
  const seed =
    today.getUTCFullYear() * 10000 +
    (today.getUTCMonth() + 1) * 100 +
    today.getUTCDate();
  return DECK[seed % DECK.length]!;
}
