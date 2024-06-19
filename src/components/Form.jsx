import { useState } from "react";

function Form() {
  // inizializzo gli state per recuperare il value dell'input e l'array nel quale varranno inseriti
  const [titolo, setTitolo] = useState("");
  const [lista, setLista] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [indexToEdit, setIndexToEdit] = useState(null);

  // sincronizzo il valore del title con l'oggetto event aggiornando lo stato tramite setNewTitle
  const handleNewTitle = (e) => {
    setTitolo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // quando l'utente clicca su modifica isEditing è true => aggiorno la lista
    if(isEditing) {
        // mappo la lista e ritorno l'array modificato controllando se index === indexToEdit sostituendo l'elemento corrente con il nuovo
        const updatedLista = lista.map((item, index) => index === indexToEdit ? titolo : item);
        setLista(updatedLista);
        setIsEditing(false);
        setIndexToEdit(null);
    // altrimenti isEditing è false => non è in modalità modifica e aggiungi normalmente il titolo
    } else {
        setLista((lista) => [titolo, ...lista]);
    }
    setTitolo("");
  };

  const removeTitle = (indexToEliminate) => {
    setLista((lista) => lista.filter((_, index) => index !== indexToEliminate));
  };

// funzione che imposta lo stato di isEditing da false a true e recupera l'index del titolo da modificare e aggiorna lo stato dell'index da editare
  const updateTitle = (indexToEdit) => {
    setTitolo(lista[indexToEdit]);
    setIsEditing(true);
    setIndexToEdit(indexToEdit);
  };

  return (
    <>
      <section className="formSection">
        <div className="container">
          <h2>{isEditing ? "Modifica il Titolo" : "Aggiungi un titolo"}</h2>
          <form onSubmit={handleSubmit}>
            <div className="formWrapper">
              <input
                type="text"
                placeholder="Inserisci un titolo.."
                value={titolo}
                onChange={handleNewTitle}
                required
              />
              <button className="btn btnAdd">{isEditing ? "Salva Modifica" : "Aggiungi"}</button>
            </div>
          </form>
          <h2>Titoli</h2>
          {/* conditional rendering se ci sono titoli renderizza la lista altrimenti il paragrafo */}
          {lista.length > 0 ? (
            <ul className="titleList">
              {lista.map((listItem, index) => (
                <li className="listItem" key={`title${index}`}>
                  {listItem}
                  <div className="buttons">
                    <button
                      className="btn btnUpdate"
                      onClick={() => updateTitle(index)}
                    >
                      Modifica
                    </button>
                    <button
                      className="btn btnRemove"
                      onClick={() => removeTitle(index)}
                    >
                      Elimina
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="listMessage">Non hai ancora inserito nessun titolo</p>
          )}
        </div>
      </section>
    </>
  );
}

export default Form;
