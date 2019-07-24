import React from 'react'
import App, { Container } from 'next/app'
import { withReduxStore } from 'lib/with-redux-store'
import { StoreContext } from 'redux-react-hook'

class MyApp extends App {
	render() {
		const { Component, pageProps, reduxStore } = this.props

		return (
			<Container>
				<StoreContext.Provider value={reduxStore}>
					<Component {...pageProps} />
				</StoreContext.Provider>
			</Container>
		)
	}
}

export default withReduxStore(MyApp)
