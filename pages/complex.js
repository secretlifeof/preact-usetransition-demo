import React, { useState, useCallback } from 'react'
import styled from 'styled-components'

import { useMappedState, useDispatch } from 'redux-react-hook'
import { changeBooleansToggle, setActiveID } from 'actions'

import { useTransition } from 'react-spring'
import IndexDetail from '../containers/index-detail'

const Main = styled.div`
	height: 100vh;
	width: 100vw;
	overflow: hidden;
`

const Button = styled.div`
	padding: 2vw;
	height: 10vh;
	width: 10vw;
	background: green;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 50vh;
	left: 50vw;
	transform: translate(-50%, -50%);
	cursor: pointer;

	@media (hover) {
		&:hover {
			background: blue;
		}
	}
`

const Complex = () => {
	// const [ detailVisibility, setVisibility ] = useState(false)

	const mapState = useCallback((state) => {
		const visibility =
			state.booleansToggle && state.booleansToggle.toggleList ? state.booleansToggle.toggleList.projectDetail : false

		return visibility
	}, [])
	const projectDetailVisibility = useMappedState(mapState)

	const dispatch = useDispatch()
	const viewProjectDetail = useCallback(() => {
		dispatch(setActiveID('projectDetail', 1))
		dispatch(changeBooleansToggle('projectDetail'))
	}, [])

	const transitions = useTransition(projectDetailVisibility, null, {
		from: { visibility: 'hidden', transform: 'translate3d(0, 100vh, 0)' },
		enter: { visibility: 'visible', transform: 'translate3d(0, 0vh, 0)' },
		leave: { visibility: 'hidden', transform: 'translate3d(0, -100vh, 0)' }
	})

	const doAction = () => {
		viewProjectDetail(true)
	}

	return (
		<Main>
			<Button onClick={doAction}>
				<div>HUG ME</div>
			</Button>
			{transitions.map(({ item, key, props }) => item && <IndexDetail key={key} styleProps={props} />)}
			{/* <IndexDetail /> */}
		</Main>
	)
}

export default Complex
