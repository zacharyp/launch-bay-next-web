import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    name: 'Composure',
    limited: 0,
    xws: 'composure',
    sides: [
      {
        title: 'Composure',
        type: 'Talent',
        ability:
          'After you fail an action, if you have no green tokens, you may perform a [Focus] action. If you do, you cannot perform additional actions this round.',
        slots: ['Talent'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_156.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_156.jpg',
        ffg: 381,
      },
    ],
    cost: { value: 1 },
    restrictions: [{ action: { type: 'Focus' } }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Crack Shot',
    limited: 0,
    xws: 'crackshot',
    sides: [
      {
        title: 'Crack Shot',
        type: 'Talent',
        ability:
          'While you perform a primary attack, if the defender is in your [Bullseye Arc], before the Neutralize Results step, you may spend 1 [Charge] to cancel 1 [Evade] result.',
        slots: ['Talent'],
        charges: { value: 1, recovers: 0 },
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_1.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_1.jpg',
        ffg: 230,
      },
    ],
    cost: { value: 1 },
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Daredevil',
    limited: 0,
    xws: 'daredevil',
    sides: [
      {
        title: 'Daredevil',
        type: 'Talent',
        ability:
          'While you perform a white [Boost] action, you may treat it as red to use the (1 [Turn Left]) or (1 [Turn Right]) template instead.',
        slots: ['Talent'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_2.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_2.jpg',
        ffg: 231,
      },
    ],
    cost: { value: 2 },
    restrictions: [
      { baseSizes: ['Small'] },
      { action: { type: 'Boost', difficulty: 'White' } },
    ],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Debris Gambit',
    limited: 0,
    xws: 'debrisgambit',
    sides: [
      {
        title: 'Debris Gambit',
        type: 'Talent',
        ability:
          'While you perform a red [Evade] action, if there is an obstacle at range 0-1, treat the action as white instead.',
        slots: ['Talent'],
        grants: [{ action: { type: 'Evade', difficulty: 'Red' }, value: 1 }],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_3.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_3.jpg',
        ffg: 232,
      },
    ],
    cost: { value: 4 },
    restrictions: [{ baseSizes: ['Small', 'Medium'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Elusive',
    limited: 0,
    xws: 'elusive',
    sides: [
      {
        title: 'Elusive',
        type: 'Talent',
        ability:
          'While you defend, you may spend 1 [Charge] to reroll 1 defense die. After you fully execute a red maneuver, recover 1 [Charge].',
        slots: ['Talent'],
        charges: { value: 1, recovers: 0 },
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_4.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_4.jpg',
        ffg: 233,
      },
    ],
    cost: { value: 3 },
    restrictions: [{ baseSizes: ['Small', 'Medium'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Expert Handling',
    limited: 0,
    xws: 'experthandling',
    sides: [
      {
        title: 'Expert Handling',
        type: 'Talent',
        text:
          'While heavy fighters can often be coaxed into a barrel roll, seasoned pilots know how to do it without putting undue stress on their craft or leaving themselves open to attack.',
        slots: ['Talent'],
        grants: [
          { action: { type: 'Barrel Roll', difficulty: 'White' }, value: 1 },
        ],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_5.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_5.jpg',
        ffg: 234,
      },
    ],
    cost: {
      variable: 'size',
      values: { Small: 2, Medium: 3, Large: 4, Huge: 200 },
    },
    restrictions: [{ action: { type: 'Barrel Roll', difficulty: 'Red' } }],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Fanatical',
    limited: 0,
    xws: 'fanatical',
    sides: [
      {
        title: 'Fanatical',
        type: 'Talent',
        ability:
          'While you perform a primary attack, if you are not shielded, you may change 1 [Focus] result to a [Hit] result.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/8b164bdb2b401b6741519f6c6e067550.png',
        slots: ['Talent'],
        ffg: 459,
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['First Order'] }],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Fearless',
    limited: 0,
    xws: 'fearless',
    sides: [
      {
        title: 'Fearless',
        type: 'Talent',
        ability:
          "While you perform a [Front Arc] primary attack, if the attack range is 1 and you are in the defender's [Front Arc], you may change 1 of your results to a [Hit] result.",
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_6.png',
        slots: ['Talent'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_6.jpg',
        ffg: 235,
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Heroic',
    limited: 0,
    xws: 'heroic',
    sides: [
      {
        title: 'Heroic',
        type: 'Talent',
        ability:
          'While you defend or perform an attack, if you have only blank results and have 2 or more results, you may reroll any number of your dice.',
        slots: ['Talent'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/9f8baf4893cd90288df44b69b50fa788.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/0f6d1677c35001248d7768047c10aa87.jpg',
        ffg: 471,
      },
    ],
    cost: { value: 1 },
    restrictions: [{ factions: ['Resistance'] }],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Intimidation',
    limited: 0,
    xws: 'intimidation',
    sides: [
      {
        title: 'Intimidation',
        type: 'Talent',
        ability:
          'While an enemy ship at range 0 defends, it rolls 1 fewer defense die.',
        slots: ['Talent'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_7.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_7.jpg',
        ffg: 236,
      },
    ],
    cost: { value: 3 },
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Juke',
    limited: 0,
    xws: 'juke',
    sides: [
      {
        title: 'Juke',
        type: 'Talent',
        ability:
          "While you perform an attack, if you are evading, you may change 1 of the defender's [Evade] results to a [Focus] result.",
        slots: ['Talent'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_8.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_8.jpg',
        ffg: 237,
      },
    ],
    cost: { value: 7 },
    restrictions: [{ baseSizes: ['Small', 'Medium'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Lone Wolf',
    limited: 1,
    xws: 'lonewolf',
    sides: [
      {
        title: 'Lone Wolf',
        type: 'Talent',
        ability:
          'While you defend or perform an attack, if there are no other friendly ships at range 0-2, you may spend 1 [Charge] to reroll 1 of your dice.',
        slots: ['Talent'],
        charges: { value: 1, recovers: 1 },
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_9.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_9.jpg',
        ffg: 238,
      },
    ],
    cost: { value: 5 },
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Marksmanship',
    limited: 0,
    xws: 'marksmanship',
    sides: [
      {
        title: 'Marksmanship',
        type: 'Talent',
        ability:
          'While you perform an attack, if the defender is in your [Bullseye Arc], you may change 1 [Hit] result to a [Critical Hit] result.',
        slots: ['Talent'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_10.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_10.jpg',
        ffg: 239,
      },
    ],
    cost: { value: 1 },
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Outmaneuver',
    limited: 0,
    xws: 'outmaneuver',
    sides: [
      {
        title: 'Outmaneuver',
        type: 'Talent',
        ability:
          "While you perform a [Front Arc] attack, if you are not in the defender's firing arc, the defender rolls 1 fewer defense die.",
        slots: ['Talent'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_11.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_11.jpg',
        ffg: 240,
      },
    ],
    cost: { value: 6 },
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Predator',
    limited: 0,
    xws: 'predator',
    sides: [
      {
        title: 'Predator',
        type: 'Talent',
        ability:
          'While you perform a primary attack, if the defender is in your [Bullseye Arc], you may reroll 1 attack die.',
        slots: ['Talent'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_12.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_12.jpg',
        ffg: 241,
      },
    ],
    cost: { value: 2 },
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Ruthless',
    limited: 0,
    xws: 'ruthless',
    sides: [
      {
        title: 'Ruthless',
        type: 'Talent',
        ability:
          'While you perform an attack, you may choose another friendly ship at range 0-1 of the defender. If you do, that ship suffers 1 [Hit] damage and you may change 1 of your die results to a [Hit] result.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_13.png',
        slots: ['Talent'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_13.jpg',
        ffg: 242,
      },
    ],
    cost: { value: 1 },
    restrictions: [{ factions: ['Galactic Empire'] }],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Saturation Salvo',
    limited: 0,
    xws: 'saturationsalvo',
    sides: [
      {
        title: 'Saturation Salvo',
        type: 'Talent',
        ability:
          'While you perform a [Torpedo] or [Missile] attack, you may spend 1 [Charge] from that upgrade. If you do, choose two defense dice. The defender must reroll those dice.',
        slots: ['Talent'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_14.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_14.jpg',
        ffg: 243,
      },
    ],
    cost: { value: 5 },
    restrictions: [{ action: { type: 'Reload' } }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Selfless',
    limited: 0,
    xws: 'selfless',
    sides: [
      {
        title: 'Selfless',
        type: 'Talent',
        ability:
          'While another friendly ship at range 0-1 defends, before the Neutralize Results step, if you are in the attack arc, you may suffer 1 [Critical Hit] damage to cancel 1 [Critical Hit] result.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_15.png',
        slots: ['Talent'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_15.jpg',
        ffg: 244,
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Squad Leader',
    limited: 1,
    xws: 'squadleader',
    sides: [
      {
        title: 'Squad Leader',
        type: 'Talent',
        ability:
          'While you coordinate, the ship you choose can perform an action only if that action is also on your action bar.',
        slots: ['Talent'],
        grants: [
          { action: { type: 'Coordinate', difficulty: 'Red' }, value: 1 },
        ],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_16.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_16.jpg',
        ffg: 245,
      },
    ],
    cost: {
      variable: 'initiative',
      values: { '0': 2, '1': 4, '2': 6, '3': 8, '4': 10, '5': 12, '6': 14 },
    },
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Swarm Tactics',
    limited: 0,
    xws: 'swarmtactics',
    sides: [
      {
        title: 'Swarm Tactics',
        type: 'Talent',
        ability:
          'At the start of the Engagement Phase, you may choose 1 friendly ship at range 1. If you do, that ship treats its initiative as equal to yours until the end of the round.',
        slots: ['Talent'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_17.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_17.jpg',
        ffg: 246,
      },
    ],
    cost: {
      variable: 'initiative',
      values: { '0': 3, '1': 3, '2': 3, '3': 3, '4': 3, '5': 4, '6': 5 },
    },
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Trick Shot',
    limited: 0,
    xws: 'trickshot',
    sides: [
      {
        title: 'Trick Shot',
        type: 'Talent',
        ability:
          'While you perform an attack that is obstructed by an obstacle, roll 1 additional attack die.',
        slots: ['Talent'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_18.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_18.jpg',
        ffg: 247,
      },
    ],
    cost: { value: 4 },
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Treacherous',
    xws: 'treacherous',
    limited: 0,
    sides: [
      {
        title: 'Treacherous',
        type: 'Talent',
        ability:
          'While you defend, you may choose a ship obstructing the attack and spend 1 [Charge]. If you do, cancel 1 [Hit] or [Critical Hit] result, and the ship you chose gains 1 strain token. After a ship at range 0-3 is destroyed, recover 1 [Charge].',
        slots: ['Talent'],
        charges: { value: 1, recovers: 0 },
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/a10d907fea50e32ab28d924c67486d37.png',
        ffg: 529,
      },
    ],
    hyperspace: true,
    epic: true,
    restrictions: [{ factions: ['Separatist Alliance'] }],
    cost: { value: 2 },
  },
  {
    name: 'Dedicated',
    xws: 'dedicated',
    limited: 0,
    sides: [
      {
        title: 'Dedicated',
        type: 'Talent',
        ability:
          'While another friendly ship in your [Left Arc] or [Right Arc] at range 0-2 defends, if it is limited or has the Dedicated upgrade and you are not strained, you may gain 1 strain token. If you do, the defender rerolls 1 of their blank results.',
        slots: ['Talent'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/31c6723d7e5670c257acfa8788160437.png',
        ffg: 544,
      },
    ],
    hyperspace: true,
    epic: true,
    restrictions: [
      { factions: ['Galactic Republic'] },
      { 'non-limited': true },
    ],
    cost: { value: 1 },
  },
  {
    name: 'Ensnare',
    xws: 'ensnare',
    limited: 0,
    sides: [
      {
        title: 'Ensnare',
        type: 'Talent',
        slots: ['Talent'],
        ability:
          'At the end of the Activation Phase, if you are tractored, you may choose 1 ship in your [Single Turret Arc] arc at range 0-1. Transfer 1 tractor token to it.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/5d7e0560460a1d91281537a658ddfc86.png',
        ffg: 610,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [{ chassis: ['nantexclassstarfighter'] }],
    cost: {
      variable: 'initiative',
      values: { '1': 12, '2': 12, '3': 12, '4': 14, '5': 21, '6': 28 },
    },
  },
  {
    name: 'Gravitic Deflection',
    xws: 'graviticdeflection',
    limited: 0,
    sides: [
      {
        title: 'Gravitic Deflection',
        type: 'Talent',
        slots: ['Talent'],
        ability:
          'While you defend, you may reroll 1 defense die for each tractored ship in the attack arc.',
        ffg: 611,
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/50ec6aa5a267ece16d36533f4efe2bb0.png',
      },
    ],
    hyperspace: true,
    epic: true,
    restrictions: [{ chassis: ['nantexclassstarfighter'] }],
    cost: { value: 5 },
  },
  {
    name: 'Snap Shot',
    limited: 0,
    xws: 'snapshot',
    hyperspace: true,
    epic: true,
    sides: [
      {
        ability:
          'After an enemy ship executes a maneuver, you may perform this attack against it as a bonus attack. Attack: Your dice cannot be modified.',
        title: 'Snap Shot',
        type: 'Talent',
        slots: ['Talent'],
        attack: {
          arc: 'Front Arc',
          value: 2,
          minrange: 2,
          maxrange: 2,
          ordnance: true,
        },
        ffg: 612,
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/fed45c0416dfd298d9433c4608e99b7e.png',
      },
    ],
    cost: {
      variable: 'size',
      values: { Small: 7, Medium: 8, Large: 9, Huge: 200 },
    },
  },
  {
    name: 'Proud Tradition',
    limited: 0,
    xws: 'proudtradition',
    sides: [
      {
        title: 'Proud Tradition',
        type: 'Talent',
        ability:
          '<strong>Setup:</strong> Equip this side faceup.\n\nWhile you have 2 or fewer stress tokens, you may perform [Focus] actions even while stressed.\n\nAfter you perform an attack, if you are stressed, the defender may spend 1 focus token or suffer 1 [Critical Hit] damage to flip this card.',
        slots: ['Talent'],
        ffg: 653,
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/09ec8bb3b37800437bbff7963db6aec6.png',
      },
      {
        title: 'False Tradition',
        type: 'Talent',
        ability: 'Treat your [Focus] actions as red.',
        slots: ['Talent'],
        ffg: 652,
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/a060961e9ee792e605c75aaf6d65ad34.png',
      },
    ],
    restrictions: [{ factions: ['First Order'] }],
    hyperspace: true,
    epic: true,
    cost: { value: 2 },
  },
];

export default t;
