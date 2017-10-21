import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ThorHelm1 from './img/ThorHelm1.jpg';
import ThorHelm2 from './img/ThorHelm2.jpg';
import ThorHelm3 from './img/ThorHelm3.jpg';
import ThorHelm4 from './img/ThorHelm4.jpg';
import ThorHelm5 from './img/ThorHelm5.jpg';
import ThorHat from './img/ThorHat.jpg';
import ThorHelm6 from './img/ThorHelm6.jpg';
import ThorHelm7 from './img/ThorHelm7.jpg';
import ThorHelm8 from './img/ThorHelm8.jpg';
import ThorWig1 from './img/ThorWig1.jpg';
import ThorWig2 from './img/ThorWig2.jpg';
import VikingArmor1 from './img/VikingArmor1.jpg';
import VikingArmor2 from './img/VikingArmor2.jpg';
import ThorCostumeFull from './img/ThorCostumeFull.jpg';
import Cape1 from './img/Cape1.jpg';
import Cape2 from './img/Cape2.jpg';
import Cape3 from './img/Cape3.jpg';
import Pauldron from './img/Pauldron.jpg';
import AirsoftArmor from './img/AirsoftArmor.jpg';
import MuscleArmor from './img/MuscleArmor.jpg';
import SilverShirt from './img/SilverShirt.jpg';
import CompressionShirt from './img/CompressionShirt.jpg';
import MotorcyclePants1 from './img/MotorcyclePants1.jpg';
import Sweatpants1 from './img/Sweatpants1.jpg';
import SoccerPants1 from './img/SoccerPants1.jpg';
import SoccerPants2 from './img/SoccerPants2.jpg';
import SoccerPants3 from './img/SoccerPants3.jpg';
import BootCovers1 from './img/BootCovers1.jpg';
import FancyBoots1 from './img/FancyBoots1.jpg';
import FancyBoots2 from './img/FancyBoots2.jpg';
import JungleBoots1 from './img/JungleBoots1.jpg';
import JungleBoots2 from './img/JungleBoots2.jpg';
import Gauntlets1 from './img/Gauntlets1.jpg';
import Gauntlets2 from './img/Gauntlets2.jpg';
import Hammer1 from './img/Hammer1.jpg';
import Hammer2 from './img/Hammer2.jpg';
import Hammer3 from './img/Hammer3.jpg';
import Hammer4 from './img/Hammer4.jpg';
import Hammer5 from './img/Hammer5.jpg';
import Hammer6 from './img/Hammer6.jpg';
import Hammer7 from './img/Hammer7.jpg';
import Hammer8 from './img/Hammer8.jpg';
import Wig1 from './img/Wig1.jpg';
import Wig2 from './img/Wig2.jpg';
import Wig3 from './img/Wig3.jpg';
import Wig4 from './img/Wig4.jpg';
import Wig5 from './img/Wig5.jpg';
import MoanaCostume1 from './img/MoanaCostume1.jpg';
import MoanaCostume2 from './img/MoanaCostume2.jpg';
import Bandeau from './img/Bandeau.jpg';
import CropTop1 from './img/CropTop1.jpg';
import CropTop2 from './img/CropTop2.jpg';
import GrassSkirt1 from './img/GrassSkirt1.jpg';
import GrassSkirt2 from './img/GrassSkirt2.jpg';
import GrassSkirt3 from './img/GrassSkirt3.jpg';
import GrassSkirt4 from './img/GrassSkirt4.jpg';
import TableRunner1 from './img/TableRunner1.jpg';
import Sarong1 from './img/Sarong1.jpg';
import Sarong2 from './img/Sarong2.jpg';
import Sarong3 from './img/Sarong3.jpg';
import Sarong4 from './img/Sarong4.jpg';
import GrassSkirt5 from './img/GrassSkirt5.jpg';
import Sandals1 from './img/Sandals1.jpg';
import Sandals2 from './img/Sandals2.jpg';
import Sandals3 from './img/Sandals3.jpg';
import Necklace1 from './img/Necklace1.jpg';
import Necklace2 from './img/Necklace2.jpg';
import Necklace3 from './img/Necklace3.jpg';
import Necklace4 from './img/Necklace4.jpg';
import Necklace5 from './img/Necklace5.jpg';
import Necklace6 from './img/Necklace6.jpg';
import Oar1 from './img/Oar1.jpg';
import Oar2 from './img/Oar2.jpg';
import Oar3 from './img/Oar3.jpg';
import Oar4 from './img/Oar4.jpg';

let items = [
  {
    itemName: 'Thor Basic Mask',
    description: 'When the universe faces injustice, Thor channels the power of lightning and gets ready to battle.',
    size: ThorHelm1,
    imageUrl: './img/ThorHelm1.jpg',
    price: 28.98,
    bodySection: 'head',
    characterName: 'Thor',
    amazonLink: 'https://www.amazon.com/Marvel-Avengers-Thor-Basic-Mask/dp/B01IHFCRQ4/ref=sr_1_3?ie=UTF8&qid=1508457022&sr=8-3&keywords=thor+helmet'
  },
  {
    itemName: 'Child Thor Helmet',
    description: 'Available Sizes: One size fits most Kids',
    size: ThorHelm2,
    imageUrl: './img/ThorHelm2.jpg',
    price: 15.99,
    bodySection: 'head',
    characterName: 'Thor',
    amazonLink: 'https://www.amazon.com/Universe-Classic-Collection-Avengers-Assemble/dp/B00HA4X7EU/ref=sr_1_4?ie=UTF8&qid=1508457022&sr=8-4&keywords=thor+helmet'
  },
  {
    itemName: 'Frightening Mask of Thor',
    description: 'Mask Seller costume mask special designed for 2017 halloween day.',
    size: ThorHelm3,
    imageUrl: './img/ThorHelm3.jpg',
    price: 14.99,
    bodySection: 'head',
    characterName: 'Thor',
    amazonLink: 'https://www.amazon.com/Mask-Seller-Halloween-Frightening-Thor/dp/B01580601Y/ref=sr_1_5?ie=UTF8&qid=1508457452&sr=8-5&keywords=thor+helmet'
  },
  {
    itemName: 'Thor Headpiece',
    description: 'You can\'t be part of the SHIELD team or play the part of the mighty God of Thunder without this!',
    size: ThorHelm4,
    imageUrl: './img/ThorHelm4.jpg',
    price: 24.98,
    bodySection: 'head',
    characterName: 'Thor',
    amazonLink: 'https://www.amazon.com/Rubies-Costume-Marvel-Universe-Headpiece/dp/B00IPDWIDG/ref=sr_1_6?ie=UTF8&qid=1508457452&sr=8-6&keywords=thor+helmet'
  },
  {
    itemName: 'Thor Helmet Mask',
    description: '',
    size: ThorHelm5,
    imageUrl: './img/ThorHelm5.jpg',
    price: 18.1,
    bodySection: 'head',
    characterName: 'Thor',
    amazonLink: 'https://www.amazon.com/2015-Superhero-Avengers-Halloween-Masquerade/dp/B014O5BGXG/ref=sr_1_9?ie=UTF8&qid=1508457452&sr=8-9&keywords=thor+helmet'
  },
  {
    itemName: 'Thor Peruvian Winter Hat',
    description: 'For a casual day in Asgard, our Thor Peruvian Hat is the way to go!',
    size: ThorHat,
    imageUrl: './img/ThorHat.jpg',
    price: 24.95,
    bodySection: 'head',
    characterName: 'Thor',
    amazonLink: 'https://www.amazon.com/THOR-Peruvian-Winter-Adult-Size/dp/B0153YFHKU/ref=sr_1_19?ie=UTF8&qid=1508457499&sr=8-19&keywords=thor+helmet'
  },
  {
    itemName: 'Thor Kids Costume Helmet',
    description: 'Includes: Helmet Excludes: Anything Else',
    size: ThorHelm6,
    imageUrl: './img/ThorHelm6.jpg',
    price: 24.69,
    bodySection: 'head',
    characterName: 'Thor',
    amazonLink: 'https://www.amazon.com/Rubies-Thor-Kids-Costume-Helmet/dp/B00MKA1RGY/ref=sr_1_23?ie=UTF8&qid=1508457499&sr=8-23&keywords=thor+helmet'
  },
  {
    itemName: 'Thor Odinson Helmet Gray',
    description: '',
    size: ThorHelm7,
    imageUrl: './img/ThorHelm7.jpg',
    price: 182,
    bodySection: 'head',
    characterName: 'Thor',
    amazonLink: 'https://www.amazon.com/Mtxc-Thor-Cosplay-Odinson-Helmet/dp/B075R52L16/ref=sr_1_37?ie=UTF8&qid=1508457515&sr=8-37&keywords=thor+helmet'
  },
  {
    itemName: 'Viking Helmet',
    description: 'Add this hat as the final piece to your costume or as an playful accessory.',
    size: ThorHelm8,
    imageUrl: './img/ThorHelm8.jpg',
    price: 6.99,
    bodySection: 'head',
    characterName: 'Thor',
    amazonLink: 'https://www.amazon.com/Viking-Helmet-Classic-Spike-Colors/dp/B010LCYSVS/ref=sr_1_15?ie=UTF8&qid=1508458520&sr=8-15&keywords=thor+helmet'
  },
  {
    itemName: 'Rubie\'s Costume Adult Thor Wig',
    description: 'Rubies takes seriously the mission to make dressing up fun.',
    size: ThorWig1,
    imageUrl: './img/ThorWig1.jpg',
    price: 12.73,
    bodySection: 'head',
    characterName: 'Thor',
    amazonLink: 'https://www.amazon.com/Rubies-Costume-Marvel-Universe-Adult/dp/B00IPDX8JY/ref=sr_1_3?ie=UTF8&qid=1508458558&sr=8-3&keywords=thor+wig'
  },
  {
    itemName: 'Avengers Cosplay Thor Wig',
    description: 'The item is easy to wash and care just using a little mild shampoo in cold water.',
    size: ThorWig2,
    imageUrl: './img/ThorWig2.jpg',
    price: 16.59,
    bodySection: 'head',
    characterName: 'Thor',
    amazonLink: 'https://www.amazon.com/Avengers-Cosplay-Thor-Wig-Halloween/dp/B017I83ULW/ref=sr_1_4_a_it?ie=UTF8&qid=1508458558&sr=8-4&keywords=thor+wig'
  },
  {
    itemName: 'Armor Venue - Leather Armor',
    description: 'Made Up of Several Riveted Leather Squares',
    size: VikingArmor1,
    imageUrl: './img/VikingArmor1.jpg',
    price: 110,
    bodySection: 'bodyWear',
    characterName: 'Thor',
    amazonLink: 'https://www.amazon.com/Armor-Venue-Fighter-Leather-Armour/dp/B013IJFNE2/ref=sr_1_3?ie=UTF8&qid=1508470200&sr=8-3&keywords=viking+armor'
  },
  {
    itemName: 'Viking Leather Armor, Black',
    description: 'Fits up to a 52 inch waist/abdomen.',
    size: VikingArmor2,
    imageUrl: './img/VikingArmor2.jpg',
    price: 120,
    bodySection: 'bodyWear',
    characterName: 'Thor',
    amazonLink: 'https://www.amazon.com/Epic-Armoury-Ready-For-Battle/dp/B00GA3LVH2/ref=sr_1_11?ie=UTF8&qid=1508470200&sr=8-11&keywords=viking+armor'
  },
  {
    itemName: 'Thor 3 Ragnarok Costume',
    description: 'Cosdaddy costumes are all tailored made according to Amazon US size.',
    size: ThorCostumeFull,
    imageUrl: './img/ThorCostumeFull.jpg',
    price: 199.99,
    bodySection: 'bodyWear',
    characterName: 'Thor',
    amazonLink: 'https://www.amazon.com/Cosdaddy-Mens-Battle-Cosplay-Costume/dp/B07474XB72/ref=sr_1_4?ie=UTF8&qid=1508470244&sr=8-4&keywords=thor+armor'
  },
  {
    itemName: 'Amscan Superhero Cape',
    description: 'Red cape measures 30", one size fits all.',
    size: Cape1,
    imageUrl: './img/Cape1.jpg',
    price: 10.41,
    bodySection: 'bodyWear',
    characterName: 'Thor',
    amazonLink: 'https://www.amazon.com/Amscan-Superhero-Dress-Costume-Accessory/dp/B011AKEMRA/ref=sr_1_5?ie=UTF8&qid=1508470364&sr=8-5&keywords=red+cape'
  },
  {
    itemName: 'SeasonsTrading 39" Red Cape',
    description: 'It\'s suitable for many costume ideas, such as superhero, devil, phantom, vampire, etc.',
    size: Cape2,
    imageUrl: './img/Cape2.jpg',
    price: 7.88,
    bodySection: 'bodyWear',
    characterName: 'Thor',
    amazonLink: 'https://www.amazon.com/SeasonsTrading-Cape-Halloween-Costume-Accessory/dp/B0142DZ3R0/ref=sr_1_14?ie=UTF8&qid=1508470364&sr=8-14&keywords=red+cape'
  },
  {
    itemName: 'Adult Superhero Cape',
    description: 'Being an adult doesn’t mean you have to act like an adult.',
    size: Cape3,
    imageUrl: './img/Cape3.jpg',
    price: 10.95,
    bodySection: 'bodyWear',
    characterName: 'Thor',
    amazonLink: 'https://www.amazon.com/Everfan-Mens-Polyester-Satin-Superhero/dp/B00EE6ZHLI/ref=sr_1_23?ie=UTF8&qid=1508470364&sr=8-23&keywords=red+cape'
  },
  {
    itemName: 'Ghoulish Pauldron',
    description: '1 Piece Latex Shoulder Pauldron Armor',
    size: Pauldron,
    imageUrl: './img/Pauldron.jpg',
    price: 39.95,
    bodySection: 'bodyWear',
    characterName: 'Thor',
    amazonLink: 'https://www.amazon.com/Ghoulish-Pauldron-Silver-GP-25058/dp/B01E0ETW8C/ref=sr_1_41?s=apparel&ie=UTF8&qid=1508470485&sr=1-41&nodeID=7141123011&psd=1&keywords=costume+armor'
  },
  {
    itemName: 'Paintball Airsoft Chest Protector, Black',
    description: 'Full chest and back protection with high quality material and high density padded foam',
    size: AirsoftArmor,
    imageUrl: './img/AirsoftArmor.jpg',
    price: 22.99,
    bodySection: 'bodyWear',
    characterName: 'Thor',
    amazonLink: 'https://www.amazon.com/ALEKO-PBCPV53-Paintball-Protector-Tactical/dp/B01HFKZD04/ref=sr_1_8?ie=UTF8&qid=1508470582&sr=8-8&keywords=black+armor'
  },
  {
    itemName: 'Medieval Muscle Chest Armor',
    description: 'The muscle cuirass was a common style of armor worn from VII BC to V AD by Greek and Roman officers.',
    size: MuscleArmor,
    imageUrl: './img/MuscleArmor.jpg',
    price: 63.99,
    bodySection: 'bodyWear',
    characterName: 'Thor',
    amazonLink: 'https://www.amazon.com/Medieval-Roman-Greek-Muscle-Cuirass/dp/B00IVP7IAG/ref=sr_1_48?ie=UTF8&qid=1508470620&sr=8-48&keywords=black+armor'
  },
  {
    itemName: 'Metallic V-Neck Long Sleeve Shirt',
    description: 'If you\'re looking for fashion t shirts , look no further!',
    size: SilverShirt,
    imageUrl: './img/SilverShirt.jpg',
    price: 19.99,
    bodySection: 'bodyWear',
    characterName: 'Thor',
    amazonLink: 'https://www.amazon.com/CIC-Collection-Nightclub-Styles-Metallic/dp/B01KPKJ8SY/ref=sr_1_4?ie=UTF8&qid=1508471390&sr=8-4&keywords=silver+long+sleeve+shirt'
  },
  {
    itemName: 'Shanliu Compression Sportwear',
    description: 'Polyester fabric with high elasticity and resilience',
    size: CompressionShirt,
    imageUrl: './img/CompressionShirt.jpg',
    price: 12.99,
    bodySection: 'bodyWear',
    characterName: 'Thor',
    amazonLink: 'https://www.amazon.com/Shanliu-Sleeveless-Compression-Athletic-Sportswear/dp/B072LCPQ6D/ref=sr_1_19?ie=UTF8&qid=1508471344&sr=8-19&keywords=sleeveless+black+jumpsuit+men'
  },
  {
    itemName: 'Thor S6 Range Pants',
    description: '',
    size: MotorcyclePants1,
    imageUrl: './img/MotorcyclePants1.jpg',
    price: 99.99,
    bodySection: 'legWear',
    characterName: 'Thor',
    amazonLink: 'https://www.amazon.com/Thor-Range-Pants-Charcoal-2901-5609/dp/B017YM1D16/ref=sr_1_25?ie=UTF8&qid=1508458259&sr=8-25&keywords=thor+pants'
  },
  {
    itemName: 'Russell Men\'s Sweatpants',
    description: '50% Cotton/50% Polyester',
    size: Sweatpants1,
    imageUrl: './img/Sweatpants1.jpg',
    price: 19.99,
    bodySection: 'legWear',
    characterName: 'Thor',
    amazonLink: 'https://www.amazon.com/Russell-Athletic-Dri-Power-Sweatpants-Pockets/dp/B000U62IYK/ref=sr_1_4?ie=UTF8&qid=1508470897&sr=8-4&keywords=black+athletic+pants'
  },
  {
    itemName: 'PUMA Core Soccer Pants',
    description: 'Elastic-waist soccer pant featuring tapered legs with contrast piping and insets',
    size: SoccerPants1,
    imageUrl: './img/SoccerPants1.jpg',
    price: 20,
    bodySection: 'legWear',
    characterName: 'Thor',
    amazonLink: 'https://www.amazon.com/PUMA-Boys-Soccer-Black-Small/dp/B00QYCJXZ6/ref=sr_1_10?ie=UTF8&qid=1508470931&sr=8-10&keywords=black+soccer+pants'
  },
  {
    itemName: 'Galaxy Men\'s Soccer Pants',
    description: 'Don\'t compromise with quality.',
    size: SoccerPants2,
    imageUrl: './img/SoccerPants2.jpg',
    price: 19.99,
    bodySection: 'legWear',
    characterName: 'Thor',
    amazonLink: 'https://www.amazon.com/Galaxy-Harvic-Athletic-Soccer-Training/dp/B073QWBNM1/ref=sr_1_18?ie=UTF8&qid=1508470931&sr=8-18&keywords=black+soccer+pants'
  },
  {
    itemName: 'Ibuyfun Skinny Track Pants',
    description: 'soccer training pants',
    size: SoccerPants3,
    imageUrl: './img/SoccerPants3.jpg',
    price: 20.04,
    bodySection: 'legWear',
    characterName: 'Thor',
    amazonLink: 'https://www.amazon.com/Ibuyfun-Sportwear-Running-Training-Trousers/dp/B00Z52BR6E/ref=sr_1_35?ie=UTF8&qid=1508470931&sr=8-35&keywords=black+soccer+pants'
  },
  {
    itemName: 'GI Joe Duke Boot Covers',
    description: 'Boots not included',
    size: BootCovers1,
    imageUrl: './img/BootCovers1.jpg',
    price: 7.97,
    bodySection: 'footWear',
    characterName: 'Thor',
    amazonLink: 'https://www.amazon.com/Joe-Duke-Costume-Boot-Covers/dp/B002KKVINQ/ref=sr_1_3?ie=UTF8&qid=1508471040&sr=8-3&keywords=costume+boots'
  },
  {
    itemName: 'Men\'s Renaissance Boots',
    description: '',
    size: FancyBoots1,
    imageUrl: './img/FancyBoots1.jpg',
    price: 54.98,
    bodySection: 'footWear',
    characterName: 'Thor',
    amazonLink: 'https://www.amazon.com/Ellie-Shoes-Mens-Renaissance-Black/dp/B003IC9BDY/ref=sr_1_43?ie=UTF8&qid=1508471040&sr=8-43&keywords=costume+boots'
  },
  {
    itemName: 'Ellie Shoes Black Boots',
    description: '',
    size: FancyBoots2,
    imageUrl: './img/FancyBoots2.jpg',
    price: 33.89,
    bodySection: 'footWear',
    characterName: 'Thor',
    amazonLink: 'https://www.amazon.com/Ellie-Shoes-Adult-Boots-Medium/dp/B006WZNCNY/ref=sr_1_66?ie=UTF8&qid=1508471104&sr=8-66&keywords=costume+boots'
  },
  {
    itemName: 'Shoe Artists Combat Jungle Boot',
    description: 'Classic combat jungle Boots',
    size: JungleBoots1,
    imageUrl: './img/JungleBoots1.jpg',
    price: 34.88,
    bodySection: 'footWear',
    characterName: 'Thor',
    amazonLink: 'https://www.amazon.com/G-I-COMBAT-Jungle-Boot-Black/dp/B00QGAIU5K/ref=sr_1_7?ie=UTF8&qid=1508471436&sr=8-7&keywords=military+boots'
  },
  {
    itemName: 'Rothco GI Jungle Boot',
    description: 'Quality tested and ensured for maximum durability',
    size: JungleBoots2,
    imageUrl: './img/JungleBoots2.jpg',
    price: 32.99,
    bodySection: 'footWear',
    characterName: 'Thor',
    amazonLink: 'https://www.amazon.com/Rothco-Type-Jungle-Boot-Black/dp/B002FGDI4M/ref=sr_1_6?ie=UTF8&qid=1508471436&sr=8-6&keywords=military+boots'
  },
  {
    itemName: 'Avengers 2 Child Thor Gauntlets',
    description: 'Officially licensed Avengers 2 costume accessory',
    size: Gauntlets1,
    imageUrl: './img/Gauntlets1.jpg',
    price: 5.99,
    bodySection: 'accessories',
    characterName: 'Thor',
    amazonLink: 'https://www.amazon.com/Avengers-Ultron-Childs-Thor-Gauntlets/dp/B00SODDS6S/ref=sr_1_67?ie=UTF8&qid=1508457770&sr=8-67&keywords=thor+costume'
  },
  {
    itemName: 'Thor Movie Cosplay Accessories',
    description: 'Perfect Costume Accessories For Thor.',
    size: Gauntlets2,
    imageUrl: './img/Gauntlets2.jpg',
    price: 55,
    bodySection: 'accessories',
    characterName: 'Thor',
    amazonLink: 'https://www.amazon.com/Cosplay-Costume-Wrist-Accessories-Hotwinds/dp/B072QKQWZP/ref=sr_1_5?ie=UTF8&qid=1508458359&sr=8-5&keywords=thor+armor'
  },
  {
    itemName: 'Avengers Assemble Thor Molded Hammer',
    description: 'Officially licensed Marvel Universe merchandise',
    size: Hammer1,
    imageUrl: './img/Hammer1.jpg',
    price: 10.69,
    bodySection: 'accessories',
    characterName: 'Thor',
    amazonLink: 'https://www.amazon.com/Avengers-Assemble-Thor-Molded-Hammer/dp/B00HA4X21I/ref=sr_1_3?ie=UTF8&qid=1508471495&sr=8-3&keywords=thor+hammer'
  },
  {
    itemName: 'Thor Ragnarok Hammer',
    description: 'not designed for battle or as a toy',
    size: Hammer2,
    imageUrl: './img/Hammer2.jpg',
    price: 10.99,
    bodySection: 'accessories',
    characterName: 'Thor',
    amazonLink: 'https://www.amazon.com/Rubies-Costume-Co-34572_NS-Thor/dp/B01N9P3XU1/ref=sr_1_4?ie=UTF8&qid=1508471495&sr=8-4&keywords=thor+hammer'
  },
  {
    itemName: 'Marvel Avengers Thor Hammer',
    description: 'Awesome Thor Battle Hammer',
    size: Hammer3,
    imageUrl: './img/Hammer3.jpg',
    price: 16.85,
    bodySection: 'accessories',
    characterName: 'Thor',
    amazonLink: 'https://www.amazon.com/Marvel-Avengers-Thor-Battle-Hammer/dp/B00ND5ZP72/ref=sr_1_5?ie=UTF8&qid=1508471495&sr=8-5&keywords=thor+hammer'
  },
  {
    itemName: 'Constructive Playthings Thor\'s Hammer',
    description: '20 1/2 in. Long',
    size: Hammer4,
    imageUrl: './img/Hammer4.jpg',
    price: 10.28,
    bodySection: 'accessories',
    characterName: 'Thor',
    amazonLink: 'https://www.amazon.com/Constructive-Playthings-USTMX364-Thors-Hammer/dp/B0053YHFRE/ref=sr_1_7?ie=UTF8&qid=1508471495&sr=8-7&keywords=thor+hammer'
  },
  {
    itemName: 'Thor Rumble Strike Hammer',
    description: 'Strike a surface for spring-activated rumbling sound effects!',
    size: Hammer5,
    imageUrl: './img/Hammer5.jpg',
    price: 19.99,
    bodySection: 'accessories',
    characterName: 'Thor',
    amazonLink: 'https://www.amazon.com/Marvel-Thor-Ragnarok-Rumble-Strike/dp/B01MYFBVYD/ref=sr_1_9?ie=UTF8&qid=1508471495&sr=8-9&keywords=thor+hammer'
  },
  {
    itemName: 'Marvel Legends Series Mjolnir',
    description: '1:1 full scale 19.75-inch premium role play hammer',
    size: Hammer6,
    imageUrl: './img/Hammer6.jpg',
    price: 99.99,
    bodySection: 'accessories',
    characterName: 'Thor',
    amazonLink: 'https://www.amazon.com/Marvel-Legends-Mjolnir-Electronic-Hammer/dp/B01IK52XS8/ref=sr_1_11?ie=UTF8&qid=1508471495&sr=8-11&keywords=thor+hammer'
  },
  {
    itemName: 'Dark World Battle Hammer',
    description: 'Foam hammer looks like the mighty hammer of Thor',
    size: Hammer7,
    imageUrl: './img/Hammer7.jpg',
    price: 15.99,
    bodySection: 'accessories',
    characterName: 'Thor',
    amazonLink: 'https://www.amazon.com/Thor-Marvel-World-Battle-Hammer/dp/B00D9LWLYK/ref=sr_1_12?ie=UTF8&qid=1508471495&sr=8-12&keywords=thor+hammer'
  },
  {
    itemName: 'Thor Lightning Strike Hammer',
    description: 'Motion-activated Lightning Strike Hammer',
    size: Hammer8,
    imageUrl: './img/Hammer8.jpg',
    price: 29.99,
    bodySection: 'accessories',
    characterName: 'Thor',
    amazonLink: 'https://www.amazon.com/Marvel-World-Lightning-Strike-Hammer/dp/B00CS0F1ZO/ref=sr_1_16?ie=UTF8&qid=1508471495&sr=8-16&keywords=thor+hammer'
  },
  {
    itemName: 'Disney Moana Wig with Flower',
    description: 'Moana\'s iconic long brown flowing hair',
    size: Wig1,
    imageUrl: './img/Wig1.jpg',
    price: 13.39,
    bodySection: 'head',
    characterName: 'Moana',
    amazonLink: 'https://www.amazon.com/Disney-Moana-Wig-Plumeria-Flower/dp/B01CQTW8CA/ref=sr_1_3?ie=UTF8&qid=1508472449&sr=8-3&keywords=moana+wig'
  },
  {
    itemName: 'OneDor Long Hair Wig',
    description: 'OneDor wigs are made of high quality synthetic fibers',
    size: Wig2,
    imageUrl: './img/Wig2.jpg',
    price: 24.99,
    bodySection: 'head',
    characterName: 'Moana',
    amazonLink: 'https://www.amazon.com/Halloween-Cosplay-Costume-Hairpiece-Darkest/dp/B00P9QRXAU/ref=sr_1_13_a_it?ie=UTF8&qid=1508472449&sr=8-13&keywords=moana+wig'
  },
  {
    itemName: 'Long Brown Cosplay Wig',
    description: 'The wig in the picture is styled by our hairstyle designer.',
    size: Wig3,
    imageUrl: './img/Wig3.jpg',
    price: 25,
    bodySection: 'head',
    characterName: 'Moana',
    amazonLink: 'https://www.amazon.com/Moana-Cosplay-Permed-Costume-Accessories/dp/B01NACKBCU/ref=sr_1_17?ie=UTF8&qid=1508472449&sr=8-17&keywords=moana+wig'
  },
  {
    itemName: 'Topcosplay Wig with Flower',
    description: '100% Synthetic',
    size: Wig4,
    imageUrl: './img/Wig4.jpg',
    price: 23.99,
    bodySection: 'head',
    characterName: 'Moana',
    amazonLink: 'https://www.amazon.com/Topcosplay-Halloween-Costumes-Cosplay-Flower/dp/B06XVTJWZN/ref=sr_1_24_a_it?ie=UTF8&qid=1508472523&sr=8-24&keywords=moana+wig'
  },
  {
    itemName: 'Moana Costume Wig for Kids',
    description: 'Genuine, Original, Authentic Disney Store',
    size: Wig5,
    imageUrl: './img/Wig5.jpg',
    price: 33.93,
    bodySection: 'head',
    characterName: 'Moana',
    amazonLink: 'https://www.amazon.com/Disney-Moana-Costume-Wig-Kids/dp/B01MF5O5IY/ref=sr_1_6?ie=UTF8&qid=1508472642&sr=8-6&keywords=moana+wig'
  },
  {
    itemName: 'Ainiel Cosplay Skirt Set',
    description: 'Clothing is made of Fabric, soft and comfortable',
    size: MoanaCostume1,
    imageUrl: './img/MoanaCostume1.jpg',
    price: 39.99,
    bodySection: 'bodyWear',
    characterName: 'Moana',
    amazonLink: 'https://www.amazon.com/Ainiel-Halloween-Cosplay-Costume-Necklace/dp/B06XRW9K9H/ref=sr_1_9?ie=UTF8&qid=1508471647&sr=8-9&keywords=moana+costume'
  },
  {
    itemName: 'Quesera Women\'s Moana Costume',
    description: 'The outfit has both adult size and children size',
    size: MoanaCostume2,
    imageUrl: './img/MoanaCostume2.jpg',
    price: 32.99,
    bodySection: 'bodyWear',
    characterName: 'Moana',
    amazonLink: 'https://www.amazon.com/Quesera-Womens-Costume-Patterned-Tassel/dp/B073F6YTYK/ref=sr_1_32?ie=UTF8&qid=1508471814&sr=8-32&keywords=moana+costume'
  },
  {
    itemName: 'Women\'s Strapless Bandeau',
    description: 'Strapless elasticated bandeau style.',
    size: Bandeau,
    imageUrl: './img/Bandeau.jpg',
    price: 5.97,
    bodySection: 'bodyWear',
    characterName: 'Moana',
    amazonLink: 'https://www.amazon.com/PurpleHanger-Womens-Sleeveless-Strapless-Bandeau/dp/B00GZNMB0S/ref=sr_1_5?ie=UTF8&qid=1508471891&sr=8-5&keywords=orange+tube+top+wrap'
  },
  {
    itemName: 'Strapless Ruffled Crop Top',
    description: 'off the shoulder croptop with elastic ruffled detail',
    size: CropTop1,
    imageUrl: './img/CropTop1.jpg',
    price: 5.99,
    bodySection: 'bodyWear',
    characterName: 'Moana',
    amazonLink: 'https://www.amazon.com/Womens-Strapless-Shoulder-Ruffled-T-shirt/dp/B06Y3NG875/ref=sr_1_15?ie=UTF8&qid=1508472179&sr=8-15&keywords=red+ruffle+top'
  },
  {
    itemName: 'Banjo Pom Crop Top',
    description: 'Made in the USA and Imported',
    size: CropTop2,
    imageUrl: './img/CropTop2.jpg',
    price: 49.45,
    bodySection: 'bodyWear',
    characterName: 'Moana',
    amazonLink: 'https://www.amazon.com/Show-Me-Your-Mumu-Bonfire/dp/B01F02EOG8/ref=sr_1_4?s=apparel&ie=UTF8&qid=1508472370&sr=1-4&nodeID=1040660&psd=1&keywords=red+crop+top&refinements=p_n_feature_eighteen_browse-bin%3A14630392011'
  },
  {
    itemName: 'Beistle Adult Raffia Hula Skirt',
    description: 'This item is a great value!',
    size: GrassSkirt1,
    imageUrl: './img/GrassSkirt1.jpg',
    price: 8.99,
    bodySection: 'legWear',
    characterName: 'Moana',
    amazonLink: 'https://www.amazon.com/Beistle-Raffia-32-Inch-30-Inch-Length/dp/B0051BVVHY/ref=sr_1_5?ie=UTF8&qid=1508472698&sr=8-5&keywords=grass+skirt'
  },
  {
    itemName: 'Women\'s Natural Grass Skirt',
    description: 'Hula through the night in this Natural Grass Hula Skirt',
    size: GrassSkirt2,
    imageUrl: './img/GrassSkirt2.jpg',
    price: 5.99,
    bodySection: 'legWear',
    characterName: 'Moana',
    amazonLink: 'https://www.amazon.com/Womens-Natural-Grass-Skirt-Beige/dp/B003JMGRKI/ref=sr_1_7?ie=UTF8&qid=1508472698&sr=8-7&keywords=grass+skirt'
  },
  {
    itemName: 'Beistle Adult Mini Hula Skirt',
    description: 'This item is a great value!',
    size: GrassSkirt3,
    imageUrl: './img/GrassSkirt3.jpg',
    price: 10.89,
    bodySection: 'legWear',
    characterName: 'Moana',
    amazonLink: 'https://www.amazon.com/Beistle-Adult-36-Inch-16-Inch-Length/dp/B00AY1LRIY/ref=sr_1_13?ie=UTF8&qid=1508472698&sr=8-13&keywords=grass+skirt'
  },
  {
    itemName: 'RINCO Luau Grass Table Skirt',
    description: 'Plastic grass table skirt with flowers around top',
    size: GrassSkirt4,
    imageUrl: './img/GrassSkirt4.jpg',
    price: 11.5,
    bodySection: 'legWear',
    characterName: 'Moana',
    amazonLink: 'https://www.amazon.com/RINCO-Natural-Decoration-Tropical-Flowers/dp/B00IFD2PYS/ref=sr_1_28?ie=UTF8&qid=1508472698&sr=8-28&keywords=grass+skirt'
  },
  {
    itemName: 'Handmade Crochet Table Runner',
    description: 'Vintage and Elegant',
    size: TableRunner1,
    imageUrl: './img/TableRunner1.jpg',
    price: 11.99,
    bodySection: 'legWear',
    characterName: 'Moana',
    amazonLink: 'https://www.amazon.com/kilofly-Handmade-Crochet-Cotton-Tablecloth/dp/B01K6YH4TO/ref=sr_1_14?s=home-garden&ie=UTF8&qid=1508472877&sr=1-14&keywords=tablecloth+white+crochet&refinements=p_n_srvg_2947266011%3A2972996011'
  },
  {
    itemName: '1 World Sarong White',
    description: 'Silky Smooth Lightweight Rayon',
    size: Sarong1,
    imageUrl: './img/Sarong1.jpg',
    price: 12.74,
    bodySection: 'legWear',
    characterName: 'Moana',
    amazonLink: 'https://www.amazon.com/World-Sarongs-Swimsuit-Cover-Up-Turquoise/dp/B000C1ZYXA/ref=sr_1_38?s=apparel&ie=UTF8&qid=1508472930&sr=1-38&nodeID=7141123011&psd=1&keywords=sarong'
  },
  {
    itemName: 'Timistar Womens Beach Sarong',
    description: 'One size fits most girls&women',
    size: Sarong2,
    imageUrl: './img/Sarong2.jpg',
    price: 7.89,
    bodySection: 'legWear',
    characterName: 'Moana',
    amazonLink: 'https://www.amazon.com/Timistar-Womens-Swimwear-Chiffon-Swimsuit/dp/B07338BGX8/ref=sr_1_40?s=apparel&ie=UTF8&qid=1508472979&sr=1-40&nodeID=7141123011&psd=1&keywords=sarong'
  },
  {
    itemName: 'Shu-Shi Women\'s Mini Sarong',
    description: 'Flirty Fashionable Fun',
    size: Sarong3,
    imageUrl: './img/Sarong3.jpg',
    price: 11.99,
    bodySection: 'legWear',
    characterName: 'Moana',
    amazonLink: 'https://www.amazon.com/Shu-Shi-Womens-Sarong-Swimsuit-Bikini/dp/B01M5GL3O4/ref=sr_1_51?s=apparel&ie=UTF8&qid=1508472979&sr=1-51&nodeID=7141123011&psd=1&keywords=sarong'
  },
  {
    itemName: 'Ingear Swimwear Long Batik Sarong',
    description: 'FREE COCONUT SHELL!!',
    size: Sarong4,
    imageUrl: './img/Sarong4.jpg',
    price: 15.99,
    bodySection: 'legWear',
    characterName: 'Moana',
    amazonLink: 'https://www.amazon.com/Ingear-Swimwear-Batik-Sarong-Swimsuit/dp/B06Y5Y176F/ref=sr_1_61?s=apparel&ie=UTF8&qid=1508472979&sr=1-61&nodeID=7141123011&psd=1&keywords=sarong'
  },
  {
    itemName: 'Rhode Island Novelty Hula Skirt',
    description: 'Great craftmanship.',
    size: GrassSkirt5,
    imageUrl: './img/GrassSkirt5.jpg',
    price: 8.99,
    bodySection: 'legWear',
    characterName: 'Moana',
    amazonLink: 'https://www.amazon.com/Rhode-Island-Novelty-Natural-Costumes/dp/B00CRKIBKC/ref=sr_1_4?s=apparel&ie=UTF8&qid=1508473071&sr=1-4&nodeID=7141123011&psd=1&keywords=grass+skirt'
  },
  {
    itemName: 'Billabong Women\'s Flat Sandal',
    description: 'Flat thong sandal featuring braided straps',
    size: Sandals1,
    imageUrl: './img/Sandals1.jpg',
    price: 19.99,
    bodySection: 'footWear',
    characterName: 'Moana',
    amazonLink: 'https://www.amazon.com/Billabong-Womens-Crossing-Over-Sandal/dp/B013LWT9HI/ref=sr_1_7?s=apparel&ie=UTF8&qid=1508473213&sr=1-7&nodeID=7147440011&psd=1&keywords=beach+sandals+for+women'
  },
  {
    itemName: 'Tenworld Women\'s Flat Sandals',
    description: 'Perfect for your casual everyday and party look.',
    size: Sandals2,
    imageUrl: './img/Sandals2.jpg',
    price: 8.98,
    bodySection: 'footWear',
    characterName: 'Moana',
    amazonLink: 'https://www.amazon.com/Tenworld-Summer-Bohemia-Sandals-Flip-flop/dp/B01DXSY0QA/ref=sr_1_12?s=apparel&ie=UTF8&qid=1508473213&sr=1-12&nodeID=7147440011&psd=1&keywords=beach+sandals+for+women'
  },
  {
    itemName: 'Moana Costume Shoes for Kids',
    description: 'Sandals with cork footbed',
    size: Sandals3,
    imageUrl: './img/Sandals3.jpg',
    price: 37.25,
    bodySection: 'footWear',
    characterName: 'Moana',
    amazonLink: 'https://www.amazon.com/Disney-Moana-Costume-Shoes-428431275611/dp/B01M25YEO2/ref=sr_1_2?s=apparel&ie=UTF8&qid=1508473279&sr=1-2&nodeID=7141123011&psd=1&keywords=moana+sandals'
  },
  {
    itemName: 'Disney Princess Moana Child Necklace',
    description: 'Officially licensed product',
    size: Necklace1,
    imageUrl: './img/Necklace1.jpg',
    price: 5.32,
    bodySection: 'accessories',
    characterName: 'Moana',
    amazonLink: 'https://www.amazon.com/Disguise-24861-Disney-Moanas-Necklace/dp/B01MRBYQQ0/ref=sr_1_7?s=apparel&ie=UTF8&qid=1508473296&sr=1-7&nodeID=7141123011&psd=1&keywords=moana+necklace'
  },
  {
    itemName: 'Necklace 2 Set for Kids',
    description: 'Come with two necklaces and gift box',
    size: Necklace2,
    imageUrl: './img/Necklace2.jpg',
    price: 8.99,
    bodySection: 'accessories',
    characterName: 'Moana',
    amazonLink: 'https://www.amazon.com/T-PERFECT-LIFE-Polynesian-Princess-Seashell/dp/B071KF8C74/ref=sr_1_12?s=apparel&ie=UTF8&qid=1508473296&sr=1-12&nodeID=7141123011&psd=1&keywords=moana+necklace'
  },
  {
    itemName: 'Moana Seashell Necklace',
    description: 'DISCOVER the "Heart of Te Fiti!',
    size: Necklace3,
    imageUrl: './img/Necklace3.jpg',
    price: 12.95,
    bodySection: 'accessories',
    characterName: 'Moana',
    amazonLink: 'https://www.amazon.com/Moana-Seashell-Necklace-Polynesian-Princess/dp/B07226C9QK/ref=sr_1_20?s=apparel&ie=UTF8&qid=1508473296&sr=1-20&nodeID=7141123011&psd=1&keywords=moana+necklace'
  },
  {
    itemName: 'Paris Lover Moana Princess Necklace',
    description: 'AMAZING',
    size: Necklace4,
    imageUrl: './img/Necklace4.jpg',
    price: 8.99,
    bodySection: 'accessories',
    characterName: 'Moana',
    amazonLink: 'https://www.amazon.com/Paris-Lover-Princess-Necklace-Seashell/dp/B073VRD27M/ref=sr_1_35?s=apparel&ie=UTF8&qid=1508473296&sr=1-35&nodeID=7141123011&psd=1&keywords=moana+necklace'
  },
  {
    itemName: 'Disney Moana Singing Necklace',
    description: 'Genuine, Original, Authentic Disney Store',
    size: Necklace5,
    imageUrl: './img/Necklace5.jpg',
    price: 14.95,
    bodySection: 'accessories',
    characterName: 'Moana',
    amazonLink: 'https://www.amazon.com/Disney-Moana-Singing-Necklace-Kids/dp/B01MT68ZGU/ref=sr_1_17?s=apparel&ie=UTF8&qid=1508473296&sr=1-17&nodeID=7141123011&psd=1&keywords=moana+necklace'
  },
  {
    itemName: 'Blue Sea Shell Glass Pendant',
    description: 'Packaging: Black Velvet Pouch',
    size: Necklace6,
    imageUrl: './img/Necklace6.jpg',
    price: 24.98,
    bodySection: 'accessories',
    characterName: 'Moana',
    amazonLink: 'https://www.amazon.com/Venetian-Murano-Shaped-Pendant-Necklace/dp/B004FJMPPA/ref=sr_1_19?s=apparel&ie=UTF8&qid=1508473438&sr=1-19&nodeID=7141123011&psd=1&keywords=seashell+necklace'
  },
  {
    itemName: 'Attwood Wood Canoe Paddle',
    description: 'Compact for easy storage.',
    size: Oar1,
    imageUrl: './img/Oar1.jpg',
    price: 14.13,
    bodySection: 'accessories',
    characterName: 'Moana',
    amazonLink: 'https://www.amazon.com/Attwood-Wood-Canoe-Paddle-4-Feet/dp/B003DJZ9D8/ref=sr_1_5?ie=UTF8&qid=1508473481&sr=8-5&keywords=canoe+paddle'
  },
  {
    itemName: 'Carlisle Ausable Canoe Paddle',
    description: 'Blade Material: Basswood',
    size: Oar2,
    imageUrl: './img/Oar2.jpg',
    price: 24.99,
    bodySection: 'accessories',
    characterName: 'Moana',
    amazonLink: 'https://www.amazon.com/Carlisle-Ausable-Wooden-Paddle-60-Inch/dp/B003L2RMPA/ref=sr_1_13?ie=UTF8&qid=1508473481&sr=8-13&keywords=canoe+paddle'
  },
  {
    itemName: 'Crooked Creek C10302 Wood Paddle',
    description: 'Lightweight but built for performance',
    size: Oar3,
    imageUrl: './img/Oar3.jpg',
    price: 18.82,
    bodySection: 'accessories',
    characterName: 'Moana',
    amazonLink: 'https://www.amazon.com/Crooked-Creek-C10302-Wood-Paddle/dp/B00BV1WVLS/ref=sr_1_6?ie=UTF8&qid=1508473549&sr=8-6&keywords=wood+canoe+paddle'
  },
  {
    itemName: 'Hampton Nautical Wooden Oar',
    description: 'Solid wooden oar - handcrafted by our master artisans',
    size: Oar4,
    imageUrl: './img/Oar4.jpg',
    price: 31.15,
    bodySection: 'accessories',
    characterName: 'Moana',
    amazonLink: 'https://www.amazon.com/Hampton-Nautical-Wooden-Hampshire-Squared/dp/B00IPLOH5U/ref=sr_1_15?ie=UTF8&qid=1508473549&sr=8-15&keywords=wood+canoe+paddle'
  }
]

ReactDOM.render(<App items={items}/>, document.getElementById('root'));
registerServiceWorker();
