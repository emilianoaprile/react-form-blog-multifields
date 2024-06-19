import React, { useState } from "react";
import Card from "./Card.jsx";

function Form() {
  const tags = ["Economia", "Arte", "Tecnologia", "Scienza"];
  const initialData = {
    title: "",
    image: "",
    content: "",
    category: "",
    tags: [],
    published: false,
  };

  const [formData, setFormData] = useState(initialData);
  const [posts, setPosts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setPosts((posts) => [...posts, formData]);
    setFormData(initialData);
  };

  const handleField = (event) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    if (event.target.name === "tags") {
      const updatedTags = value
        ? [...formData.tags, event.target.value]
        : formData.tags.filter((tag) => tag !== event.target.value);
      setFormData((formData) => ({
        ...formData,
        tags: updatedTags,
      }));
    } else if (event.target.name === "published") {
      setFormData((formData) => ({
        ...formData,
        published: value,
      }));
    } else {
      setFormData((formData) => ({
        ...formData,
        [event.target.name]: value,
      }));
    }
  };

  return (
    <>
      <section className="formSection">
        <div className="container-sm">
          <h2 className="title">Aggiungi un post</h2>
          <form onSubmit={handleSubmit}>
            <div className="formWrapper">
              <input
                type="text"
                name="title"
                placeholder="Inserisci un titolo.."
                value={formData.title}
                onChange={handleField}
                required
              />

              <input
                type="text"
                name="image"
                placeholder="Scegli un immagine..."
                value={formData.image}
                onChange={handleField}
              />

              <textarea
                className="formTextArea"
                name="content"
                placeholder="Inserisci il contenuto.."
                value={formData.content}
                onChange={handleField}
                required
              ></textarea>

              <select
                className="formSelect"
                name="category"
                value={formData.category}
                onChange={handleField}
                required
              >
                <option value="">Seleziona una categoria</option>
                <option value="Tecnologia">Tecnologia</option>
                <option value="Scienza">Scienza</option>
                <option value="Arte">Arte</option>
                <option value="Economia">Economia</option>
              </select>

              <div className="formTags">
                <p className="formTagsTitle"><strong>Tags:</strong></p>
                {tags.map((tag) => (
                  <label className="formTagLabel" key={tag}>
                    <input
                    className="formTagInput"
                      type="checkbox"
                      name="tags"
                      value={tag}
                      checked={formData.tags.includes(tag)}
                      onChange={handleField}
                    />
                    {tag}
                  </label>
                ))}
              </div>

              <label htmlFor="published" className="publishedLabel">
                Pubblicato
                <input
                  className="publishedInput"
                  type="checkbox"
                  name="published"
                  id="published"
                  checked={formData.published}
                  onChange={handleField}
                />
              </label>

              <button className="btn btnAdd" type="submit">
                Aggiungi
              </button>
            </div>
          </form>
        </div>
      </section>

      {posts.length > 0 ? (
        <section>
          <h2 className="title">Posts</h2>

          <div className="container-lg">
            <div className="posts">
              {posts.map((p, index) => (
                <Card
                  key={`post${index}`}
                  title={p.title}
                  imageUrl={p.image}
                  content={p.content}
                  category={p.category}
                  tags={p.tags}
                  published={p.published}
                />
              ))}
            </div>
          </div>
        </section>
      ) : (
        <div className="container-lg">
          <p className="title">Nessun post aggiunto</p>
        </div>
      )}
    </>
  );
}

export default Form;
