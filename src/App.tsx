/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactHashRouter } from '@ionic/react-router';
import LandingPage from './pages/LandingPage';
import FirstEthLockdropPage from './pages/FirstEthLockdropPage';
import SideMenu from './components/SideMenu';
import LockdropCalcPage from './pages/LockdropCalcPage';
import EthRealTimeLockPage from './pages/EthRealTimeLockPage';
import * as plasmUtils from './helpers/plasmUtils';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {
    return (
        <IonApp>
            <IonReactHashRouter>
                <IonSplitPane contentId="main" when="lg">
                    <SideMenu />

                    <IonRouterOutlet id="main" animated>
                        <Route exact path="/lock-form" component={LandingPage} />
                        <Route path="/lock-form/first" component={FirstEthLockdropPage} />
                        <Route
                            path="/lock-form/second-eth"
                            component={(props: any) => (
                                <EthRealTimeLockPage {...props} lockdropNetwork={plasmUtils.PlasmNetwork.Main} />
                            )}
                        />
                        <Route
                            path="/lock-form/dusty-eth"
                            component={(props: any) => (
                                <EthRealTimeLockPage {...props} lockdropNetwork={plasmUtils.PlasmNetwork.Dusty} />
                            )}
                        />
                        <Route path="/utils-calculator" component={LockdropCalcPage} />
                        <Route exact path="/" render={() => <Redirect to="/lock-form" />} />
                    </IonRouterOutlet>
                </IonSplitPane>
            </IonReactHashRouter>
        </IonApp>
    );
};

export default App;
