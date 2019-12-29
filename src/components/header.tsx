import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import {
  Toolbar,
  Typography,
  Grid,
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContentText,
  DialogContent,
  Divider,
  AppBar,
} from "@material-ui/core"
import {
  Menu as MenuIcon,
  Cancel as CancelIcon,
  ShoppingBasket as ShoppingBasketIcon,
} from "@material-ui/icons"

type Kebab = {
  id: number
  title: string
  description: string
  price: number
  image: string
}

const Header = ({
  siteTitle,
  products,
  removeProduct,
}: {
  siteTitle: string
  products: Kebab[]
  removeProduct: (id: number) => void
}) => {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (products.length === 0) {
      setOpen(false)
    }
  }, [products])
  const onClose = () => setOpen(false)
  return (
    <>
      <AppBar style={{ backgroundColor: "white", color: "black" }}>
        <Toolbar>
          <Typography>{siteTitle}</Typography>
          {products.length > 0 && (
            <Grid
              container
              justify="flex-end"
              direction="row"
              alignItems="center"
            >
              <Typography>
                {products.reduce((acc, el) => acc + el.price, 0)},-
              </Typography>
              <IconButton onClick={() => setOpen(true)}>
                <ShoppingBasketIcon />
              </IconButton>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
      <Dialog fullScreen={true} open={open} onClose={() => setOpen(false)}>
        <DialogTitle id="responsive-dialog-title">Handlekurv</DialogTitle>
        <DialogContent>
          {products.map(el => {
            return (
              <div
                key={el.id}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <IconButton onClick={() => removeProduct(el.id)}>
                  <CancelIcon color="error" />
                </IconButton>
                <div style={{ width: "100%" }}>
                  <Typography>
                    {el.title}: {el.price},-
                  </Typography>
                  <Divider />
                </div>
              </div>
            )
          })}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={onClose} color="primary">
            Tilbake
          </Button>
          <Button
            onClick={onClose}
            color="primary"
            autoFocus
            variant="contained"
            style={{ background: "#EC5825", color: "white" }}
          >
            Betal med vipps
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
