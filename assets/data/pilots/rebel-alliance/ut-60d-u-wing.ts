import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'UT-60D U-wing',
  xws: 'ut60duwing',
  ffg: 15,
  size: 'Medium',
  dial: [
    '0OR',
    '1BB',
    '1FB',
    '1NB',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3BW',
    '3FW',
    '3NW',
    '4FW',
  ],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 5 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Coordinate' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_U-wing.png',
  pilots: [
    {
      name: 'Benthic Two Tubes',
      caption: 'Cavern Angels Marksman',
      initiative: 2,
      limited: 1,
      cost: 46,
      xws: 'benthictwotubes',
      ability:
        'After you perform a [Focus] action, you may transfer 1 of your focus tokens to a friendly ship at range 1-2.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_58.png',
      slots: [
        'Sensor',
        'Crew',
        'Crew',
        'Illicit',
        'Modification',
        'Configuration',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_58.jpg',
      ffg: 58,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Blue Squadron Scout',
      initiative: 2,
      limited: 0,
      cost: 43,
      xws: 'bluesquadronscout',
      text:
        "Used for deploying troops under the cover of darkness or into the heat of battle, the UT-60D U-wing fulfills the Rebellion's need for a swift and hardy troop transport.",
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_60.png',
      slots: ['Sensor', 'Crew', 'Crew', 'Modification', 'Configuration'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_60.jpg',
      ffg: 60,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Bodhi Rook',
      caption: 'Imperial Defector',
      initiative: 4,
      limited: 1,
      cost: 48,
      xws: 'bodhirook',
      ability:
        'Friendly ships can acquire locks onto objects at range 0-3 of any friendly ship.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_54.png',
      slots: [
        'Talent',
        'Sensor',
        'Crew',
        'Crew',
        'Modification',
        'Configuration',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_54.jpg',
      ffg: 54,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Cassian Andor',
      caption: 'Raised by the Rebellion',
      initiative: 3,
      limited: 1,
      cost: 51,
      xws: 'cassianandor',
      ability:
        'At the start of the Activation Phase, you may choose 1 friendly ship at range 1-3. If you do, that ship removes 1 stress token.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_56.png',
      slots: [
        'Talent',
        'Sensor',
        'Crew',
        'Crew',
        'Modification',
        'Configuration',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_56.jpg',
      ffg: 56,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Heff Tobber',
      caption: 'Blue Eight',
      initiative: 2,
      limited: 1,
      cost: 44,
      xws: 'hefftobber',
      ability:
        'After an enemy ship executes a maneuver, if it is at range 0, you may perform an action.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_59.png',
      slots: [
        'Talent',
        'Sensor',
        'Crew',
        'Crew',
        'Modification',
        'Configuration',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_59.jpg',
      ffg: 59,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Magva Yarro',
      caption: 'Cavern Angels Spotter',
      initiative: 3,
      limited: 1,
      cost: 50,
      xws: 'magvayarro',
      ability:
        'While a friendly ship at range 0-2 defends, the attacker cannot reroll more than 1 attack die.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_57.png',
      slots: [
        'Talent',
        'Sensor',
        'Crew',
        'Crew',
        'Illicit',
        'Modification',
        'Configuration',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_57.jpg',
      ffg: 57,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Partisan Renegade',
      initiative: 1,
      limited: 0,
      cost: 43,
      xws: 'partisanrenegade',
      text:
        "Saw Gerrera's partisans were first established to oppose Separatist forces on Onderon during the Clone Wars and continued to wage war against galactic tyranny as the Empire rose to power.",
      slots: [
        'Sensor',
        'Crew',
        'Crew',
        'Illicit',
        'Modification',
        'Configuration',
      ],
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_61.png',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_61.jpg',
      ffg: 61,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Saw Gerrera',
      caption: 'Obsessive Outlaw',
      initiative: 4,
      limited: 1,
      cost: 52,
      xws: 'sawgerrera',
      ability:
        'While a damaged friendly ship at range 0-3 performs an attack, it may reroll 1 attack die.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_55.png',
      slots: [
        'Talent',
        'Sensor',
        'Crew',
        'Crew',
        'Illicit',
        'Modification',
        'Configuration',
      ],
      alt: [
        {
          image:
            'https://images-cdn.fantasyflightgames.com/filer_public/fe/0c/fe0cdda5-8529-4331-a508-bde68b627e65/g18x2-saw-gerrera-2.png',
          source: 'Season Two 2018',
        },
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_55.jpg',
      ffg: 55,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'K-2SO',
      caption: 'Cassian Said I Had To',
      initiative: 3,
      limited: 1,
      cost: 46,
      xws: 'k2so',
      ability: 'After you gain a stress token, gain 1 calculate token.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/c65da3d5378ec32bd024325dbd80b3d6.png',
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Lock' },
        { difficulty: 'Red', type: 'Coordinate' },
      ],
      slots: [
        'Talent',
        'Sensor',
        'Crew',
        'Crew',
        'Modification',
        'Configuration',
      ],
      ffg: 629,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;
