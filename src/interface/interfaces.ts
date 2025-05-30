export type Ability = {
  ability: { name: string; url: string };
  is_hidden: boolean;
  slot: number;
};

export type Form = {
  name: string;
  url: string;
};

export type GameIndice = {
  game_index: number;
  version: { name: string; url: string };
};

export type VersionGroupDetail = {
  level_learned_at: number;
  move_learn_method: { name: string; url: string };
  order: number | string;
  version_group: { name: string; url: string };
};

export type Move = {
  move: { name: string; url: string };
  version_group_details: Array<VersionGroupDetail>;
};

export type PastAbility = {
  abilities: Array<Ability>;
  generation: { name: string; url: string };
};

export type Stat = {
  base_stat: number;
  effort: number;
  stat: { name: string; url: string };
};

export type Type = {
  slot: number;
  type: { name: string; url: string };
};

export interface Pokemon {
  abilities: Array<Ability>;
  base_experience: number;
  cries: { latest: string; legacy: string };
  forms: Array<Form>;
  game_indices: Array<GameIndice>;
  height: number;
  held_items: Array<any>;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Array<Move>;
  name: string;
  order: number;
  past_abilities: Array<PastAbility>;
  past_types: Array<any>;
  species: { name: string; url: string };
  stats: Array<Stat>;
  types: Array<Type>;
  weight: number;
}
