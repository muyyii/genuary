" __   _(_)_ __ ___  _ __ ___
" \ \ / / | '_ ` _ \| '__/ __|
"  \ V /| | | | | | | | | (__
"   \_/ |_|_| |_| |_|_|  \___|

"""""""""""""""""""""""""""""""

"""""""""""""""""""""""""""""""

filetype plugin on

" vim-plug

" Specify a directory for plugins
" - For Neovim: stdpath('data') . '/plugged'
" - Avoid using standard Vim directory names like 'plugin'
call plug#begin()

" Make sure you use single quotes

" Using a non-default branch
Plug 'jalvesaq/Nvim-R', {'branch': 'stable'}
Plug 'lervag/vimtex'
Plug 'arcticicestudio/nord-vim'

" Initialize plugin system
call plug#end()


" Elemental items:
"
set encoding=utf-8 " investigar para que puede ser útil esto
syntax enable 
set number
" set relativenumber
set tabstop=4
set shiftwidth=4

set linebreak

set scrolloff=16    " me encanta, lineas máximas arriba o abajo del cursor 
set mouse=a  

" Color Schemes
" nord-theme-overrides
augroup nord-theme-overrides
	autocmd!
	" Use 'nord7' as foreground color for Vim comment titles.
	autocmd ColorScheme nord highlight vimCommentTitle ctermfg=14 guifg=#8FBCBB
augroup END

colorscheme nord

" Diccionario, corrector ortográfico.
autocmd FileType markdown,tex,latex set spell! 
set spelllang=en,es
set spellfile=~/.config/nvim/spell/diccionario.utf-8.add
" Modo de uso
" zg agrega palabras nuevas al diccionario
" ]s siguiente palabra con faltas
" [s anterior palabra con faltas
" zw marca malas palabras
" z= muestra listado de palabras recomendadas 


" Key_maps
runtime first_keymap.vim
