import React, { useCallback } from 'react'
import styled from 'styled-components'
// import { connect } from 'react-redux';
import { useTransition } from 'react-spring'

import { useMappedState } from 'redux-react-hook'

import IndexList from 'components/index-list'
import IndexDetail from 'containers/index-detail'

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body,
  html {
    background: #1c1c1c;
  }
`

const Main = styled.div`
	background: #1c1c1c;
	padding-top: ${(props) => (props.hasTitle ? 0 : 'var(--main-padding)')};
	min-height: 97vh;

	@media only screen and (max-width: 1023px) {
		padding-top: 3vh;
	}

	@media only screen and (max-width: 767px) {
		padding-top: 5vh;
	}
`

// const AnimatedIndexDetail = animated(IndexDetail);

const Index = ({ title = false, filterCategory = true, match }) => {
	// const [ showIndexDetail ] = useState(false);
	const mapState = useCallback((state) => {
		const visibility =
			state.booleansToggle && state.booleansToggle.toggleList ? state.booleansToggle.toggleList.projectDetail : false

		return visibility
	}, [])
	const projectDetailVisibility = useMappedState(mapState)

	const transitions = useTransition(projectDetailVisibility, null, {
		from: { display: 'none', transform: 'translate3d(0, 100vh, 0)' },
		enter: { display: 'initial', transform: 'translate3d(0, 0vh, 0)' },
		leave: { display: 'none', transform: 'translate3d(0, 0vh, 0)' }
	})

	return (
		<Main hasTitle={title}>
			<GlobalStyle />
			{transitions.map(({ item, key, props }) => item && <IndexDetail key={key} styleProps={props} />)}
			<IndexList title={title} filterCategory={filterCategory} match={match} />
		</Main>
	)
}

export default Index
