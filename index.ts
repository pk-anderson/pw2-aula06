// Questão 1
export function arraysEqual(a: string[], b: string[]): boolean {
    if (a.length !== b.length) {
      return false;
    }
  
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
  
    return true;
}
  
//Questão 2
export function equalElements(a: string[], b: string[]): (string | undefined)[] | undefined {
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
export function arraysOfArraysEqual(a: string[][], b: string[][]): boolean {
    if (a.length !== b.length) {
      return false;
    }
  
    for (let i = 0; i < a.length; i++) {
      if (!arraysEqual(a[i], b[i])) {
        return false;
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
        result.push([]);
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
  alcunha: string;
  coordenadas: {
    latitude: [number, number, number];
    longitude: [number, number, number];
  };
}

export function descreveCidade(cidade: Cidade): string {
    const lat = grausMinutosSegundos(cidade.coordenadas.latitude, "S");
    const long = grausMinutosSegundos(cidade.coordenadas.longitude, "O");
  
    return `${cidade.nome}, Paraíba\n* "${cidade.alcunha}"\n* Localizada em ${lat} ${long}`;
  }
  
  function grausMinutosSegundos(coord: [number, number, number], dir: string): string {
    const graus = coord[0];
    const minutos = coord[1];
    const segundos = coord[2];
  
    return `${graus}° ${minutos}' ${segundos}" ${dir}`;
  }

//Questão 6

export interface Restaurante {
    cidade: string;
    nome: string;
  }
  
  interface Resultado {
    [cidade: string]: string[];
  }

export function agruparRestaurantesPorCidade(restaurantes: Restaurante[]): Resultado {
    return restaurantes.reduce((resultado: Resultado, restaurante: Restaurante) => {
      if (!resultado[restaurante.cidade]) {
        resultado[restaurante.cidade] = [];
      }
  
      resultado[restaurante.cidade].push(restaurante.nome);
  
      return resultado;
    }, {});
  }
