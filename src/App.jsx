// Components
import ListItem from "./ListItems";
// data
import { data } from "../src/assets/data/data";
// Mantine Component
import { Container } from "@mantine/core";

function App() {
  return (
    <Container ta="center">
      <h3>لیست محصولات</h3>
      <ListItem data={data} />
    </Container>
  );
}

export default App;
