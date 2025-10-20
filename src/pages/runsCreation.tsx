import '../css/runsCreation.css';


export default function RunsCreation(){
    return(
       <div className="page">
  <div className="card">
    <div style={{ textAlign:'center', marginBottom: '32px' }}>
      <h1 className="title">Nova Run</h1>
      <p className="subtitle">Comece uma nova jornada Nuzlocke</p>
    </div>

    <div className="form">
      <div className="field">
        <label>Nome da Run</label>
        <input className="input" placeholder="Ex: Desafio Kanto" />
      </div>

      <div className="field">
        <label>Jogo</label>
        <input className="input" placeholder="Ex: Pokémon FireRed" />
      </div>

      <div className="field">
        <label>Versão</label>
        <input className="input" placeholder="Ex: Versão 1.0" />
      </div>

      <div className="actions">
        <button className="btn" type="button">Criar Run</button>
      </div>
    </div>
  </div>
</div>

    );
}