import React, { useCallback } from 'react'
import styled from 'styled-components'

import { useDispatch } from 'redux-react-hook'
import { changeBooleansToggle } from 'actions'

// import { useQuery } from 'graphql-hooks'
import { animated } from 'react-spring'

const Main = styled(animated.div)`
  position: fixed;
	overflow-y: scroll;
	-webkit-overflow-scrolling: touch;
	overflow-x: hidden;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	z-index: 10;

  .image {
		position: relative;
		top: 0;
		height: auto;
		width: 100%;
		/* background: ${(props) => props.bgColorIndexDetail}; */
	}

  .scene {
		position: relative;
		width: 100vw;
		background: black;
    min-height: 110vh;
	}
`

const Filler = styled.div`
	height: 100vh;
	background: ${(props) => props.color};
`

const Button = styled.div`
	padding: 2vw;
	height: 5vh;
	width: 10vw;
	background: blue;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	top: 50vh;
	left: 50vw;
	transform: translate(-50%, -50%);
	cursor: pointer;

	@media (hover) {
		&:hover {
			background: orange;
		}
	}
`

const IndexDetail = ({ styleProps, setVisibility }) => {
	const dispatch = useDispatch()
	const viewProjectDetail = useCallback(() => {
		dispatch(changeBooleansToggle('projectDetail', false))
	}, [])

	// if this is added sometimes more lag, sometimes less
	// const mapState = useCallback((state) => {
	// 	const projectID = state.activeIDs.activeIDsList ? state.activeIDs.activeIDsList.projectDetail : ''

	// 	return projectID
	// }, [])
	// const projectID = useMappedState(mapState)

	// when I added a GraphQl query here the Button from pages/indexlist worked consistent but still second opening there is no animation

	return (
		<Main style={styleProps}>
			<Filler color="red" />
			<Filler color="blue" />
			<Filler color="green">
				<Button
					onClick={() => {
						viewProjectDetail(false)
						setVisibility && setVisibility(false)
					}}
				>
					CLOSE ME
				</Button>
			</Filler>
		</Main>
	)
}

export default IndexDetail
