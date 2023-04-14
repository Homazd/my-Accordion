// Mantine Components
import { Container, NavLink } from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";

export default function ListItems({ data }) {
  return (
    <>
      <Container maw="300px" bg="#D8D8D8" dir="rtl" ta="right">
        {data.map((item, key) => {
          return (
            <>
              <NavLink
                rightSection={<IconChevronLeft size="0.8rem" />}
                ta="inherit"
                label={item.name}
              >
                {!item.children && (
                  <NavLink
                    component="a"
                    href={item.link}
                    key={key}
                    label={item.name}
                  />
                )}
                {item.children && <ListItems data={item.children} />}
              </NavLink>
            </>
          );
        })}
      </Container>
    </>
  );
}
