// Questão 1
export function HasEqualString(a: string[], b: string[]): boolean {
  if (a.length !== b.length) {
    return false;
  }

  const aSet = new Set(a);

  for (const str of b) {
    if (!aSet.has(str)) {
      return false;
    }
  }

  return true;
}

//Questão 2

export function hasEqualElements(a: string[], b: string[]): (string | undefined)[] | undefined {
  if (a.length !== b.length) {
    return undefined;
  }

  const result: (string | undefined)[] = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) {
      result.push(a[i]);
    } else {
      result.push(undefined);
    }
  }

  return result;
}

//Questão 3 

export function hasEqualArrays(a: string[][], b: string[][]): boolean {
  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    const aSub = a[i];
    const bSub = b[i];

    if (aSub.length !== bSub.length) {
      return false;
    }

    for (let j = 0; j < aSub.length; j++) {
      if (aSub[j] !== bSub[j]) {
        return false;
      }
    }
  }

  return true;
}

//Questão 4

export function compareArrays(a: string[][], b: string[][]): (string | undefined)[][] {
  const result: (string | undefined)[][] = [];

  for (let i = 0; i < a.length && i < b.length; i++) {
    const aSub = a[i];
    const bSub = b[i];

    if (aSub.length !== bSub.length) {
      result.push(undefined);
    } else {
      const subresult: (string | undefined)[] = [];

      for (let j = 0; j < aSub.length; j++) {
        if (aSub[j] === bSub[j]) {
          subresult.push(aSub[j]);
        } else {
          subresult.push(undefined);
        }
      }

      result.push(subresult);
    }
  }

  return result;
}

//Questão 5

export interface Cidade {
  nome: string;
  estado: string;
  alcunha: string;
  coordenadas: {
    latitude: [number, number, number];
    longitude: [number, number, number];
  };
}

export function descreveCidade(cidade: Cidade): string {
  const [latGraus, latMinutos, latSegundos] = cidade.coordenadas.latitude;
  const [lonGraus, lonMinutos, lonSegundos] = cidade.coordenadas.longitude;

  const latitude = `${latGraus}° ${latMinutos}' ${latSegundos}" ${
    latGraus < 0 ? "S" : "N"
  }`;
  const longitude = `${lonGraus}° ${lonMinutos}' ${lonSegundos}" ${
    lonGraus < 0 ? "O" : "L"
  }`;

  return `${cidade.nome}, ${cidade.estado}\n* "${cidade.alcunha}"\n* Localizada em ${latitude} ${longitude}`;
}

//Questão 6

export interface Restaurante {
  cidade: string;
  nome: string;
}

export interface RestaurantesAgrupados {
  [key: string]: string[];
}

export function agruparRestaurantesPorCidade(restaurantes: Restaurante[]): RestaurantesAgrupados {
  const restaurantesAgrupados: RestaurantesAgrupados = {};

  for (const restaurante of restaurantes) {
    if (restaurante.cidade in restaurantesAgrupados) {
      restaurantesAgrupados[restaurante.cidade].push(restaurante.nome);
    } else {
      restaurantesAgrupados[restaurante.cidade] = [restaurante.nome];
    }
  }

  return restaurantesAgrupados;
}
