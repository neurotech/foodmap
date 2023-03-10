import styled from "styled-components";
import { Space } from "./Space";

interface ColumnProps {
  children?: React.ReactNode;
  columnWidth?: string;
  space?: Space;
}

const StyledColumn = styled.div<ColumnProps>`
  display: flex;
  flex-basis: auto;
  min-width: 0;
  padding-left: ${(props) => props.space};

  @media (max-width: 576px) {
    width: 100%;
  }

  @media (min-width: 577px) {
    width: ${(props) => props.columnWidth};
  }
`;

export const Column = ({
  children,
  columnWidth = "100%",
  space = "1rem",
}: ColumnProps) => {
  return (
    <StyledColumn columnWidth={columnWidth} space={space}>
      {children}
    </StyledColumn>
  );
};
