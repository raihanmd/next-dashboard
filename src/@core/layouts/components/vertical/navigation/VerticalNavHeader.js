// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import { styled, useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

// ** Custom Icon Import
import Icon from 'src/@core/components/icon'

// ** Configs
import themeConfig from 'src/configs/themeConfig'
import UserDropdown from '../../shared-components/UserDropdown'

// ** Styled Components
const MenuHeaderWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingRight: theme.spacing(4.5),
  transition: 'padding .25s ease-in-out',
  minHeight: theme.mixins.toolbar.minHeight
}))

const HeaderTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  lineHeight: '24px',
  fontSize: '1.375rem !important',
  color: theme.palette.text.primary,
  transition: 'opacity .25s ease-in-out, margin .25s ease-in-out'
}))

const LinkStyled = styled(Link)({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none'
})

export const VerticalNavHeader = props => {
  // ** Props
  const {
    hidden,
    navHover,
    settings,
    saveSettings,
    collapsedNavWidth,
    toggleNavVisibility,
    navigationBorderWidth,
    menuLockedIcon: userMenuLockedIcon,
    navMenuBranding: userNavMenuBranding,
    menuUnlockedIcon: userMenuUnlockedIcon
  } = props

  // ** Hooks & Vars
  const theme = useTheme()
  const { mode, navCollapsed } = settings
  const menuCollapsedStyles = navCollapsed && !navHover ? { opacity: 0 } : { opacity: 1 }

  const menuHeaderPaddingLeft = () => {
    if (navCollapsed && !navHover) {
      if (userNavMenuBranding) {
        return 0
      } else {
        return (collapsedNavWidth - navigationBorderWidth - 32) / 8
      }
    } else {
      return 4.5
    }
  }

  const conditionalColors = () => {
    if (mode === 'semi-dark') {
      return {
        '& .MuiTypography-root, & .MuiIconButton-root': {
          color: `rgba(${theme.palette.customColors.dark}, 0.87)`
        }
      }
    } else {
      return {
        '& .MuiTypography-root, & .MuiIconButton-root': {
          color: 'text.primary'
        }
      }
    }
  }

  const MenuLockedIcon = () => userMenuLockedIcon || <Icon icon='tabler:circle-dot' />
  const MenuUnlockedIcon = () => userMenuUnlockedIcon || <Icon icon='tabler:circle' />

  return (
    <>
      <MenuHeaderWrapper className='nav-header' sx={{ pl: menuHeaderPaddingLeft(), ...conditionalColors() }}>
        {userNavMenuBranding ? (
          userNavMenuBranding(props)
        ) : (
          <LinkStyled href='/'>
            <p>Logo</p>
            <HeaderTitle
              variant='h6'
              sx={{ ...menuCollapsedStyles, ...(navCollapsed && !navHover ? {} : { ml: 2.5 }) }}
            >
              {themeConfig.templateName}
            </HeaderTitle>
          </LinkStyled>
        )}

        {hidden ? (
          <IconButton
            disableRipple
            disableFocusRipple
            onClick={toggleNavVisibility}
            sx={{
              p: 0,
              backgroundColor: 'transparent !important',
              color: `${
                mode === 'semi-dark' ? `rbga(${theme.palette.customColors.dark}, 0.6)` : theme.palette.text.secondary
              } !important`
            }}
          >
            <Icon icon='tabler:x' fontSize='1.25rem' />
          </IconButton>
        ) : userMenuLockedIcon === null && userMenuUnlockedIcon === null ? null : (
          <IconButton
            disableRipple
            disableFocusRipple
            onClick={() => saveSettings({ ...settings, navCollapsed: !navCollapsed })}
            sx={{
              p: 0,
              backgroundColor: 'transparent !important',
              '& svg': {
                fontSize: '1.25rem',
                ...menuCollapsedStyles,
                transition: 'opacity .25s ease-in-out'
              }
            }}
          >
            {navCollapsed ? MenuUnlockedIcon() : MenuLockedIcon()}
          </IconButton>
        )}
      </MenuHeaderWrapper>

      {/* <Box sx={{ pl: menuHeaderPaddingLeft, display: 'flex' }}>
        <Badge
          overlap='circular'
          badgeContent={<BadgeContentSpan />}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
        >
          <Avatar alt='John Doe' src='/images/avatars/1.png' sx={{ width: '2.5rem', height: '2.5rem' }} />
        </Badge>{' '}
        <Box sx={{ display: 'flex', ml: 2.5, alignItems: 'flex-start', flexDirection: 'column' }}>
          <Typography sx={{ fontWeight: 500 }}>John Doe</Typography>
          <Typography variant='body2'>Admin</Typography>
        </Box>
        <UserDropdown settings={settings} />
      </Box> */}
    </>
  )
}

export default VerticalNavHeader
