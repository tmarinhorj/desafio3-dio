// Definição da classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = '';
      }
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Criação de heróis
  let mago = new Heroi('Merlin', 150, 'mago');
  let guerreiro = new Heroi('Arthur', 35, 'guerreiro');
  let monge = new Heroi('Shaolin', 50, 'monge');
  let ninja = new Heroi('Hattori', 40, 'ninja');
  
  // Heróis atacando
  mago.atacar();
  guerreiro.atacar();
  monge.atacar();
  ninja.atacar();
  