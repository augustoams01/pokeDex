import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Image } from '@mui/icons-material';
import PokeBall from "../public/images/361998.png";
import { useNavigate } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function NavBar({pokemonSearch, hideSearch}) {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static"  sx={{ backgroundColor: '#191919'}}>
        <Toolbar className='flex justify-between'>
          <img src={PokeBall} alt="" className='size-9 cursor-pointer' onClick={() => navigate('/')}/>
          {hideSearch ? null : (
          <Search onChange={(e) => pokemonSearch(e.target.value)} sx={{borderRadius: '20px'}}>
            <SearchIconWrapper>
              <SearchIcon className='text-[#C73659]'/>
            </SearchIconWrapper>
            <StyledInputBase
              
              placeholder="Pesquisar…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>)}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
