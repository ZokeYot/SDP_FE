import { Routes } from '@angular/router';
import { RegisterComponent } from './section/user/register/register.component';
import { LoginComponent } from './section/user/login/login.component';
import { ProfileComponent } from './section/user/profile/profile.component';
import { UpdateComponent } from './section/user/update/update.component';
import { MaterialListComponent } from './section/material/material-list/material-list.component';
import { MaterialDetailsComponent } from './section/material/material-details/material-details.component';
import { CreateQuizComponent } from './section/quiz/create-quiz/create-quiz.component';
import { ConversationComponent } from './section/conversation/conversation/conversation.component';
import { QuizComponent } from './section/quiz/quiz-detail/quiz.component';
import { AttemptQuizComponent } from './section/quiz/attempt-quiz/attempt-quiz.component';
import { QuizListComponent } from './section/quiz/quiz-list/quiz-list.component';
import { UpdateQuizComponent } from './section/quiz/update-quiz/update-quiz.component';
import { AddStudentComponent } from './section/quiz/add-student/add-student.component';
import { DeleteStudentComponent } from './section/quiz/delete-student/delete-student.component';
import { ShopComponent } from './section/gaming/shop/shop.component';
import { GahcaTitlesComponent } from './section/gaming/gahca-titles/gahca-titles.component';
import { PowerUpComponent } from './section/gaming/power-up/power-up.component';
import { CreateConversationComponent } from './section/conversation/create-conversation/create-conversation.component';
import { CreateGroupComponent } from './section/conversation/create-group/create-group.component';
import { UpdateGroupComponent } from './section/conversation/update-group/update-group.component';
import { AddGroupMemberComponent } from './section/conversation/add-group-member/add-group-member.component';
import { DeleteGroupMemberComponent } from './section/conversation/delete-group-member/delete-group-member.component';
import { HomePageComponent } from './section/home/home-page/home-page.component';


export const routes: Routes = [
    { path: "register", component: RegisterComponent },
    { path: "", component: HomePageComponent },
    { path: "login", component: LoginComponent },
    { path: "profile", component: ProfileComponent },
    { path: "update", component: UpdateComponent },
    { path: "conversation", component: ConversationComponent },
    { path: 'quiz', component: QuizListComponent },
    { path: 'materials', component: MaterialListComponent },
    { path: 'material-details/:title/:filename/:date', component: MaterialDetailsComponent },
    { path: 'create-quiz', component: CreateQuizComponent },
    { path: 'home-page', component: HomePageComponent },
    { path: 'shop', component: ShopComponent },
    { path: "quiz/:id", component: QuizComponent },
    { path: "attempt-quiz/:id", component: AttemptQuizComponent },
    { path: "attempt-quiz/:id/:use", component: AttemptQuizComponent },
    { path: "quiz/update/:id", component: UpdateQuizComponent },
    { path: "quiz/add-student/:id", component: AddStudentComponent },
    { path: "quiz/delete-student/:id", component: DeleteStudentComponent },
    { path: "gacha", component: GahcaTitlesComponent },
    { path: "power-up", component: PowerUpComponent },
    { path: "new-conversation", component: CreateConversationComponent },
    { path: "new-group", component: CreateGroupComponent },
    { path: "update-group/:id", component: UpdateGroupComponent },
    { path: "group/add-member/:id", component: AddGroupMemberComponent },
    { path: "group/remove-member/:id", component: DeleteGroupMemberComponent }
]
