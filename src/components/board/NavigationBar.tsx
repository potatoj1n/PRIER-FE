import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navigation,
  Button,
  ButtonText,
  SegmentedControlContainer,
  SegmentedControl,
  MenuItem,
  CategoryButtonsContainer,
  CategoryButton,
  Title,
  TopContainer, // 추가된 부분
  BottomContainer, // 추가된 부분
} from '../../pages/board/BoardStyles';
import SearchInput from './SearchInput';

const categoryLabels: { [key: string]: string } = {
  'it-news': 'IT 지식',
  chat: '잡담/일상',
  tech: '기술',
  internship: '인턴십/공모전',
  notice: '공지사항',
};

interface NavigationBarProps {
  activeCategory: string;
  activeFilter: string;
  handleCategoryClick: (category: string) => void;
  handleFilterClick: (filter: string) => void;
  title: string;
}

const NavigationBar: React.FC<NavigationBarProps> = ({
  activeCategory,
  activeFilter,
  handleCategoryClick,
  handleFilterClick,
  title,
}) => {
  return (
    <Navigation>
      <TopContainer>
        <Title>{title}</Title>
      </TopContainer>
      <BottomContainer>
        <SegmentedControlContainer>
          <SegmentedControl>
            {Object.keys(categoryLabels).map(category => (
              <MenuItem
                key={category}
                active={activeCategory === category}
                onClick={() => handleCategoryClick(category)}
              >
                {categoryLabels[category]}
              </MenuItem>
            ))}
          </SegmentedControl>
        </SegmentedControlContainer>
        <CategoryButtonsContainer>
          <CategoryButton active={activeFilter === 'all'} onClick={() => handleFilterClick('all')}>
            All
          </CategoryButton>
          <CategoryButton active={activeFilter === 'likes'} onClick={() => handleFilterClick('likes')}>
            Likes
          </CategoryButton>
          <CategoryButton active={activeFilter === 'myposts'} onClick={() => handleFilterClick('myposts')}>
            My Posts
          </CategoryButton>
        </CategoryButtonsContainer>
        <SearchInput />
        <Button as={Link} to="/CreateBoard">
          <ButtonText>새 글 작성하기</ButtonText>
        </Button>
      </BottomContainer>
    </Navigation>
  );
};

export default NavigationBar;
