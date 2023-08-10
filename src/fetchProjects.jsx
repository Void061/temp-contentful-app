import { useState, useEffect } from "react";
// Creazione del fetcher di contentful (SDK installato)

import { createClient } from "contentful";

const client = createClient({
  space: "400490lq33yz",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      // Prendiamo gli elementi dentro la tabella projects
      const response = await client.getEntries({ content_type: "projects" });

      // Componiamo un array di oggetti con solo le proprietà che ci interessano
      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { title, url, id, img };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};
